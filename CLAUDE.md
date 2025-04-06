# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `npm run build`
- Dev: `npm run dev --turbopack`
- Start: `npm run start`
- Lint: `npm run lint`

## Code Style Guidelines
- Follow Next.js App Router patterns and conventions
- Use TypeScript with strict mode enabled
- Components use PascalCase naming (e.g., ProjectLink.tsx, Footer.tsx)
- Use Tailwind CSS for styling with shadcn/ui "new-york" style
- Prefer lucide-react for icons
- React components should be functional components with TypeScript types
- Organize imports alphabetically
- Pages follow Next.js file-based routing structure
- Keep UI components in the components/ui directory
- Follow DRY principles and create reusable components
- Use types/interfaces instead of any
- Prefer const assertions for static values