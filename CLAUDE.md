# CLAUDE.md - Project Context for Claude Code

## Project Overview
This is Henrik Söderlund's personal website being rebuilt with modern technologies.

## Tech Stack
- **Frontend**: React with TypeScript, built with Vite
- **Backend**: Hono.js (modern web framework)
- **Deployment**: Cloudflare Workers
- **Routing**: React Router for client-side routing

## Current Status
- Migrating from Thulite/Hugo static site to Vite + React + Hono stack
- Working on site-rebuild-vite branch
- Content has been migrated from old site structure

## Project Structure
```
src/
├── react-app/           # React frontend application
│   ├── components/      # React components
│   ├── assets/         # Static assets (images, icons)
│   └── App.tsx         # Main App component
├── server/             # Backend server code (Hono.js)
└── types/              # TypeScript type definitions
```

## Key Components
- **App.tsx**: Main application with routing setup
- **NavigationBox.tsx**: Fixed navigation menu with page and heading links
- **Home.tsx**: Homepage component with hero section and navigation
- **Footer.tsx**: Footer with tech stack logos (Vite, Hono, Cloudflare Workers)

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Design System & Recent Fixes
- Clean, minimal design with proper typography
- **Layout**: App content horizontally centered using flexbox on body element
- **Navigation**: Fixed navigation box (200px width) on left side with grey hover states
- **Navigation Styling**: 
  - Hover color: #f5f5f5 (fresh grey, no blue)
  - Button borders: 0.5px for subtle appearance
  - No rounded borders on hover/focus states
  - Section headings "Pages" and "On This Page" visible but filtered from dynamic menu items
- **Footer**: Tech stack logos standardized to 20px with proper alignment
- **Responsive**: Navigation hidden on mobile (<1024px)
- **Text Alignment**: Content is left-aligned, only containers are centered

## Navigation Box Features
- Dynamic heading detection and navigation
- Collapsible with expand/collapse button
- Filters out headings named "Pages", "On This Page", "Navigation" from dynamic list
- Smooth scroll to headings on click

## Cloudflare Workers Configuration

### Wrangler Configuration
The project uses **wrangler.json** (not wrangler.toml) for configuration:
- **Purpose**: Used by both local development AND Cloudflare Workers deployment
- **GitHub Integration**: When you push to GitHub, Cloudflare Workers uses this file to understand how to build and deploy your app
- **Build Process**: The `wrangler.json` tells Workers which files to include, build commands, and routing rules

### Key Wrangler Settings Needed:
1. **Entry Point**: Defines the main server file (usually Hono app)
2. **Build Commands**: How to compile TypeScript and bundle assets
3. **Route Configuration**: URL patterns and handling
4. **Environment Variables**: Any secrets or config needed

### Deployment Flow:
1. Push code to GitHub
2. Cloudflare Workers detects changes via GitHub integration
3. Workers reads `wrangler.json` for build instructions
4. Automatically builds and deploys the app
5. Your site goes live on Cloudflare's edge network

The wrangler file is ESSENTIAL for both local dev and production deployment.