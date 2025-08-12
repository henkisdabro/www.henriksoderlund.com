# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack web application built with React, Vite, Hono, and Cloudflare Workers. It combines a React frontend with a lightweight Hono backend that runs on Cloudflare Workers at the edge.

## Architecture

### Frontend (React App)
- **Location**: `src/react-app/`
- **Entry point**: `src/react-app/main.tsx`
- **Main component**: `src/react-app/App.tsx`
- Built with Vite for fast development and optimized builds
- Uses React 19 with TypeScript

### Backend (Cloudflare Worker)
- **Location**: `src/worker/index.ts`
- Built with Hono framework for lightweight API routes
- Runs on Cloudflare Workers runtime
- Serves API endpoints at `/api/*` routes

### Build System
- **Frontend build**: Vite compiles React app to `dist/client/`
- **Worker build**: TypeScript compiles worker to run on Cloudflare edge
- **Deployment**: Wrangler handles deployment to Cloudflare Workers
- **Assets**: Static assets served from `dist/client/` via Cloudflare Workers

## Common Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:5173)
npm run cf-typegen   # Generate Cloudflare Worker types
```

### Build and Test
```bash
npm run build        # Build both frontend and worker for production
npm run check        # Full check: TypeScript + build + dry-run deploy
npm run lint         # Run ESLint on all files
```

### Deployment
```bash
npm run preview      # Preview production build locally
npm run deploy       # Deploy to Cloudflare Workers
npx wrangler tail    # Monitor deployed worker logs
```

## Configuration Files

- **wrangler.json**: Cloudflare Workers configuration, defines worker name and build settings
- **vite.config.ts**: Vite build configuration with React and Cloudflare plugins
- **tsconfig.json**: Root TypeScript config that references app, node, and worker configs
- **eslint.config.js**: ESLint configuration with React and TypeScript rules

## Development Workflow

1. Run `npm run dev` for local development with HMR
2. Frontend communicates with worker API via `/api/*` routes
3. Use `npm run check` before deployment to validate build
4. Deploy with `npm run deploy` when ready for production

## Key Dependencies

- **Runtime**: React 19, Hono 4.8.2
- **Build tools**: Vite 6.0, TypeScript 5.8.3
- **Deployment**: Wrangler 4.28.1, @cloudflare/vite-plugin
- **Linting**: ESLint 9.27.0 with React hooks and TypeScript support