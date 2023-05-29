import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { prisma } from "dotenv/server/db";
import {z} from "zod";
import {User} from ".prisma/client";

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
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

const loginSchema = z.object({
  email: z.string().email({ message: "Ce champ doit être un email" }),
  password: z.string().min(6),
});

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
    signIn: "/login",
    newUser: "/register",
  },
  callbacks: {
    jwt({ token, user, account }) {
      if (account && user) {
        token.email = user.email;
        token.sub = user.id;
      }

      return token;
    }
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "DotEaseAuth",
      credentials: {
        email: { label: "Email", placeholder: "example@email.fr", type: "email" },
        password: { label: "Password", placeholder: "******", type: "password"},
      },
      async authorize(credentials) {
        const creds = await loginSchema.parseAsync(credentials);
        const user: User | null = await prisma.user.findUnique({ where : { email: creds.email }});

        if (!user)
          return null;

        const validPassword = await bcrypt.compare(creds.password, user.password);

        if (!validPassword)
          return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email
        }
      },
    }),

    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
