# T3 Stack Demo — Server Compass

> A production-ready **T3 stack** application template for self-hosting with
> [Server Compass](https://servercompass.app/) — the modern way to deploy T3
> stack apps to your own VPS.

This demo showcases how [Server Compass](https://servercompass.app/) can deploy
a full T3 stack application (Next.js 15 + tRPC v11 + TypeScript + Tailwind CSS)
to any Linux server in minutes.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| API | tRPC v11 — end-to-end type-safe |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Runtime | Node.js 22 (standalone build) |

## Endpoints

| Route | Description |
|-------|-------------|
| `GET /` | Dashboard page — shows public env vars fetched via tRPC |
| `GET /api/trpc/env.getPublic` | tRPC HTTP endpoint |
| `GET /api/env` | Direct JSON endpoint returning public env vars |
| `GET /health` | Health check — returns `{ "status": "ok" }` |

## Environment Variables

Copy `.env.example` to `.env` and fill in your values.

| Variable | Visibility | Description |
|----------|-----------|-------------|
| `APP_NAME` | Public | Human-readable app name |
| `API_URL` | Public | Server Compass API base URL |
| `ENVIRONMENT` | Public | `development` / `staging` / `production` |
| `VERSION` | Public | Application version string |
| `DATABASE_URL` | **Private** | PostgreSQL connection string |
| `API_SECRET_KEY` | **Private** | Secret key for signing tokens |

Public variables are surfaced on the dashboard and `/api/env`. Private
variables are loaded server-side only and are never sent to the browser.

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Docker

```bash
# Build
docker build -t servercompass-t3-demo .

# Run
docker run -p 3000:3000 --env-file .env servercompass-t3-demo
```

## Deploy to Your VPS

Deploy this T3 stack application to any VPS in minutes with
[Server Compass](https://servercompass.app/) — the modern way to
**self host T3 stack**, **deploy Next.js to a VPS**, and
**install tRPC** applications on your own infrastructure.

1. Push this repo to GitHub
2. Connect your VPS in Server Compass
3. Point Server Compass at the repo — it detects the Dockerfile automatically
4. Set your environment variables in the Server Compass dashboard
5. Deploy

## Keywords

self host T3 stack, deploy T3 to VPS, install Next.js self-hosted,
self-hosted tRPC, deploy Next.js to VPS, T3 stack docker deployment,
self host Next.js, tRPC production deployment
