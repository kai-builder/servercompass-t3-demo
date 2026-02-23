import { NextResponse } from "next/server";

/**
 * GET /health
 * Top-level health check used by Docker HEALTHCHECK, load balancers, and
 * Server Compass uptime monitoring.
 */
export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "servercompass-t3-demo",
  });
}
