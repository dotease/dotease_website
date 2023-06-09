import { createTRPCRouter, publicProcedure } from "dotenv/server/api/trpc";
import { registerSchema } from "dotenv/components/RegisterForm";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";

export const authRouter = createTRPCRouter({
  registerUser: publicProcedure.input(registerSchema).mutation(async ({ input, ctx: { prisma } }) => {
    const user = await prisma.user.findUnique({ where: { email: input.email } });

    if (user) throw new TRPCError({ code: "BAD_REQUEST", message: "L'utilisateur existe déjà" });

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(input.password, salt);
    const registerUser = { ...input, password: hashPassword };

    const createdUser = await prisma.user.create({
      data: {
        email: registerUser.email,
        name: registerUser.username,
        last_name: registerUser.last_name,
        first_name: registerUser.first_name,
        password: registerUser.password,
      },
    });

    return {
      status: 201,
      message: "Account created successfully",
      result: createdUser,
    };
  }),
});
