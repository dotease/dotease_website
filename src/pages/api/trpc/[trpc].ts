import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "dotenv/env.mjs";
import { createTRPCContext } from "dotenv/server/api/trpc";
import { appRouter } from "dotenv/server/api/root";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
});
