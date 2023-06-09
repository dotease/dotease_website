import { createTRPCRouter } from "dotenv/server/api/trpc";
import { exampleRouter } from "dotenv/server/api/routers/example";
import {authRouter} from "dotenv/server/api/routers/auth";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
