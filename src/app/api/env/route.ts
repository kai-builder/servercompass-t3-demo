import { NextResponse } from "next/server";

const PUBLIC_KEYS = ["APP_NAME", "API_URL", "ENVIRONMENT", "VERSION"] as const;

/**
 * GET /api/env
 * Direct JSON endpoint for compatibility with Server Compass healthcheck and
 * other tooling that expects a plain REST endpoint alongside tRPC.
 */
export function GET() {
  const envs = PUBLIC_KEYS.map((key) => ({
    key,
    value: process.env[key] ?? "Not set",
    isSet: Boolean(process.env[key]),
  }));

  return NextResponse.json({ envs });
}
