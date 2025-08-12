# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Henrik Söderlund's personal website (www.henriksoderlund.com) built with Hugo and the Hyas theme. It's a static site generator project that showcases professional experience, skills, and consultation services.

## Technology Stack

- **Static Site Generator**: Hugo (v0.101.0)
- **Framework**: Hyas (Hugo starter theme)
- **CSS Framework**: Bootstrap 5.2
- **JavaScript**: Vanilla JS with Bootstrap components
- **Build Tools**: npm, Hugo, PostCSS, Babel
- **Deployment**: Netlify (configured via netlify.toml)
- **Analytics**: Google Tag Manager with server-side tagging

## Common Development Commands

### Development
- `npm run start` - Start Hugo development server on localhost:1313
- `npm run start:lan` - Start server accessible on LAN (192.168.1.10:1313)

### Building
- `npm run build` - Build production site with minification and garbage collection
- `npm run build:preview` - Build with draft/future content enabled
- `npm run clean` - Remove public and resources directories

### Testing and Quality
- `npm run test` - Run all linting (equivalent to npm run lint)
- `npm run lint` - Run scripts, styles, and markdown linting
- `npm run lint:scripts` - ESLint for JavaScript files
- `npm run lint:styles` - Stylelint for SCSS/CSS files
- `npm run lint:markdown` - Markdownlint for Markdown files
- `npm run lint:markdown-fix` - Auto-fix markdown issues

### Content Creation
- `npm run create` - Create new Hugo content using archetypes

## Project Structure

### Key Directories
- `/content/` - Markdown content files for pages and blog posts
- `/layouts/` - Hugo template files (HTML with Go templating)
- `/assets/` - Source assets (SCSS, JS, images) processed by Hugo Pipes
- `/static/` - Static files copied directly to output
- `/config/` - Hugo configuration files (TOML format)
- `/data/` - Data files for Hugo's data layer

### Configuration
- `/config/_default/` - Default Hugo configuration
- `/config/production/` - Production-specific overrides
- `/netlify.toml` - Netlify deployment configuration

### Templates and Partials
- `/layouts/partials/` - Reusable template components
- `/layouts/shortcodes/` - Custom Hugo shortcodes for content
- Hugo templates use Go's text/template syntax

## Content Management

### Front Matter
Content files use YAML front matter with fields like:
- `title`, `description`, `date`, `lastmod`
- `draft: false` for published content
- `images: []` for Open Graph/social images

### Custom Shortcodes
Available shortcodes for content:
- `{{< navigation-*-button >}}` - Navigation buttons for different sections
- `{{< request-resume-button >}}` - Resume request button

## Analytics and Tracking

The site uses Google Tag Manager with server-side tagging:
- GTM container configured in `/config/_default/params.toml`
- Server-side endpoint: `load.sgtm.henriksoderlund.com`
- Custom GTM library name for enhanced privacy
- Development/staging environment support

## Development Notes

- Hugo version is managed via `hugo-installer` package
- Bootstrap and other dependencies are managed through npm
- SCSS compilation happens through Hugo Pipes
- Images are processed with Hugo's image processing (WebP conversion, responsive images)
- Site supports both light and responsive images with lazy loading

## Deployment

Netlify configuration includes:
- Build command: `npm run build`
- Node.js version: 16.16.0
- Automatic sitemap submission to search engines
- Branch-specific deploy previews