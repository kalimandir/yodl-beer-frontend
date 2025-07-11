# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

**Development:**

- `pnpm dev` or `pnpm start` - Development server on port 3000
- `pnpm build` - Production build with TypeScript compilation
- `pnpm serve` - Preview production build
- `pnpm test` - Run Vitest test suite

**Code Quality:**

- `pnpm lint` - ESLint with TypeScript and React rules
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check formatting without changes

**Component Installation:**

- `pnpx shadcn@latest add [component]` - Add shadcn/ui components

## Architecture Overview

This is a modern React 19 application with TypeScript, built using Vite and TanStack Router.

**Tech Stack:**

- **React 19** with modern JSX transform (no React imports needed)
- **TypeScript 5.7** with strict configuration
- **Vite 6.1** for build tooling and development
- **TanStack Router 1.121** for file-based routing
- **Tailwind CSS 4.0** with Vite plugin integration
- **Shadcn/ui** components (New York style, Zinc theme)

**Key Architecture Patterns:**

- **File-based routing** in `src/routes/` - routes are automatically generated from files
- **Layout system** via `__root.tsx` with `<Outlet />` for child routes
- **Type-safe routing** with generated route tree and TypeScript integration
- **Component organization** in `src/components/` with path aliases (`@/*` → `./src/*`)

## Routing Structure

- Routes defined as files in `src/routes/`
- `__root.tsx` serves as the application layout wrapper
- `index.tsx` represents the home page (`/`)
- Navigation uses `<Link>` components from `@tanstack/react-router`
- Router includes devtools, preloading, scroll restoration, and structural sharing

## Styling System

**Tailwind CSS 4.0 Modern Setup:**

- Uses `@import 'tailwindcss'` syntax (v4 approach)
- OKLCH color space for better color consistency
- CSS custom properties for theming
- Dark mode support configured

**Shadcn/ui Integration:**

- Pre-configured for New York style components
- Zinc color palette as base theme
- Lucide icons as standard icon library
- Use `pnpx shadcn@latest add [component]` to install components

## Development Workflow

**Code Quality:**

- ESLint 9.30 with modern flat config
- Prettier with 120 character line width for widescreen optimization
- TypeScript strict mode enabled
- Testing with Vitest and React Testing Library

**Performance Features:**

- Intent-based preloading for routes
- Automatic code splitting via TanStack Router
- Vite's native ES modules for fast development
- Hot module replacement (HMR)

## Data Fetching Patterns

The application supports multiple data fetching approaches:

- **Route loaders** - Load data before route renders using TanStack Router's `loader` function
- **TanStack Query integration** - For component-level data fetching (add `@tanstack/react-query`)
- **TanStack Store** - For client-side state management (add `@tanstack/store`)

## Commit Message Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for all commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:** feat, fix, docs, style, refactor, test, chore, ci, build, perf

**Examples:**

- `feat: add user authentication system`
- `fix(router): resolve navigation issue on mobile`
- `docs: update API documentation`

## Important Notes

- React 19 automatic JSX transform means no React imports needed in components
- All routes must export a Route created with `createRoute()` or `createRootRoute()`
- Path aliases configured: `@/*` maps to `./src/*`
- TypeScript target is ES2022 with strict settings
- Router devtools available in development mode
