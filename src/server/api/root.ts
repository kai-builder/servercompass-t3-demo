import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { envRouter } from "~/server/api/routers/env";

/**
 * Root router — merges all sub-routers.
 */
export const appRouter = createTRPCRouter({
  env: envRouter,
});

export type AppRouter = typeof appRouter;

/**
 * Server-side caller for use in React Server Components.
 */
export const createCaller = createCallerFactory(appRouter);
