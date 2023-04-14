import NextAuth from "next-auth";
import { authOptions } from "dotenv/server/auth";

export default NextAuth(authOptions);
