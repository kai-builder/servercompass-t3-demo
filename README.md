# T3 Stack Demo - Server Compass

> A production-ready T3 stack application template for self-hosting with [Server Compass](https://servercompass.app/)

This demo shows how to deploy a T3 stack (Next.js + tRPC + Prisma + Tailwind) application to any VPS using Server Compass. It renders environment variables on a dark-themed landing page and exposes a JSON endpoint — a practical starting point for anyone looking to self host T3 stack apps.

## Quick Start

### Local Development

```bash
cp .env.example .env
npm install
npm run dev
```

Visit http://localhost:3000

### Docker

```bash
docker build -t servercompass-t3-demo .
docker run -p 3000:3000 --env-file .env.example servercompass-t3-demo
```

Visit http://localhost:3000

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `APP_NAME` | Application display name | `ServerCompass T3 Stack Demo` |
| `API_URL` | Server Compass API endpoint | `https://api.servercompass.app` |
| `ENVIRONMENT` | Deployment environment | `production` |
| `VERSION` | Application version | `1.0.0` |
| `DATABASE_URL` | PostgreSQL connection string | _(kept server-side)_ |
| `API_SECRET_KEY` | Secret API key | _(kept server-side)_ |
| `PORT` | HTTP port to listen on | `3000` |

`DATABASE_URL` and `API_SECRET_KEY` are intentionally kept server-side and never exposed to the browser.

## Endpoints

| Path | Description |
|---|---|
| `GET /` | Landing page with public env vars |
| `GET /api/env` | JSON response of public env vars |
| `GET /health` | Health check — returns `{"status":"ok"}` |

## Project Structure

```
servercompass-t3-demo/
├── server.js              # Express server (T3-style)
├── Dockerfile             # Multi-stage build (deps + runtime)
├── .dockerignore
├── .env.example
└── package.json
```

## Deploy to Your VPS

Deploy this T3 stack application to any VPS in minutes with [Server Compass](https://servercompass.app/) — the modern way to self host T3 stack applications on your own infrastructure.

Server Compass handles:
- Docker image builds and registry pushes
- Environment variable injection
- Zero-downtime deployments
- Health monitoring and auto-restart

Visit [servercompass.app](https://servercompass.app/) to get started.

---

<!-- Keywords: self host t3 stack, deploy t3 stack to vps, install t3 stack, t3 stack docker deployment, t3 stack self-hosted -->
