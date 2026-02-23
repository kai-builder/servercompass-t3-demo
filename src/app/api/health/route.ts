import { NextResponse } from "next/server";

/**
 * GET /health
 * Standard health check endpoint used by Docker HEALTHCHECK and load balancers.
 */
export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "servercompass-t3-demo",
  });
}
