import { type GetServerSidePropsContext } from "next";
import { getServerSession, type NextAuthOptions, type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { prisma } from "dotenv/server/db";
import { type User } from "@prisma/client";
import { loginSchema } from "dotenv/components/LoginForm";
import { env } from "dotenv/env.mjs";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      surname: string;
      email: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
    signOut: "/auth/logout",
  },
  callbacks: {
    jwt({ token, user, account }) {
      if (account && user) {
        token.email = user.email;
        token.name = user.name;
        token.sub = user.id;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "DotEaseAuth",
      credentials: {
        email: { label: "Email", placeholder: "example@email.fr", type: "email" },
        password: { label: "Password", placeholder: "******", type: "password" },
      },
      async authorize(credentials) {
        const creds: { email: string; password: string } = await loginSchema.parseAsync(credentials);
        const user: User | null = await prisma.user.findUnique({ where: { email: creds.email } });

        if (!user) return null;

        const validPassword = await bcrypt.compare(creds.password, user.password);

        if (!validPassword) return null;

        return {
          id: user.id,
          name: user.name,
          surname: user.surname,
          email: user.email,
        };
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: { req: GetServerSidePropsContext["req"]; res: GetServerSidePropsContext["res"] }) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
