import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const PUBLIC_KEYS = ["APP_NAME", "API_URL", "ENVIRONMENT", "VERSION"] as const;

function getPublicEnvs() {
  return PUBLIC_KEYS.map((key) => ({
    key,
    value: process.env[key] ?? "Not set",
    isSet: Boolean(process.env[key]),
  }));
}

export const envRouter = createTRPCRouter({
  /**
   * Returns only the safe, public-facing environment variables.
   * Private keys (DATABASE_URL, API_SECRET_KEY) are never exposed.
   */
  getPublic: publicProcedure.query(() => {
    return {
      envs: getPublicEnvs(),
      fetchedAt: new Date().toISOString(),
    };
  }),

  /**
   * Health check procedure — confirms tRPC is reachable.
   */
  getHealth: publicProcedure.query(() => {
    return {
      status: "ok" as const,
      service: "servercompass-t3-demo",
      timestamp: new Date().toISOString(),
    };
  }),

  /**
   * Returns a single env var by key (public keys only).
   */
  getOne: publicProcedure
    .input(z.object({ key: z.enum(PUBLIC_KEYS) }))
    .query(({ input }) => {
      const value = process.env[input.key];
      return {
        key: input.key,
        value: value ?? "Not set",
        isSet: Boolean(value),
      };
    }),
});
