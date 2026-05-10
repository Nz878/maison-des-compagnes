# Maison des Compagnes

A modern web application built with TanStack Start and TypeScript, featuring a sleek UI powered by Radix UI components and Tailwind CSS.

## Project Overview

This is a full-stack web application showcasing a collection of products and services. The project includes:
- Server-side rendering with TanStack Start
- Type-safe routing with TanStack Router
- Beautiful UI components from Radix UI
- Form handling with React Hook Form
- Responsive design with Tailwind CSS
- Cloudflare deployment support

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start)
- **Language**: TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **Deployment**: [Cloudflare](https://www.cloudflare.com/)

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/            # Radix UI based components
│   ├── Layout.tsx
│   ├── Nav.tsx
│   ├── Footer.tsx
│   └── ...
├── routes/            # TanStack Router routes
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── assets/            # Static assets
├── router.tsx         # Router configuration
├── server.ts          # Server-side setup
├── start.ts           # Application entry point
└── styles.css         # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

```bash
# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build locally
npm run preview
```

## Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the application for production
- **`npm run build:dev`** - Build with development settings for debugging
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run format`** - Format code with Prettier

## Features

- 🎨 Beautiful, accessible UI components
- 📱 Fully responsive design
- 🚀 Server-side rendering
- 🔒 Type-safe with TypeScript
- 🎯 Client-side routing
- ♿ WCAG compliant components
- 🎭 Smooth animations and interactions

## Routes

The application includes the following main routes:

- `/` - Home page
- `/about` - About page
- `/collection` - Product collection
- `/companion` - Companion section
- `/contact` - Contact page
- `/womenswear` - Womenswear collection

## Configuration Files

- **`vite.config.ts`** - Vite configuration
- **`tsconfig.json`** - TypeScript configuration
- **`wrangler.jsonc`** - Cloudflare Workers configuration
- **`components.json`** - shadcn/ui configuration
- **`eslint.config.js`** - ESLint configuration

## Deployment

This project is configured for deployment on Cloudflare using Wrangler. To deploy:

```bash
npm run build
wrangler deploy
```

## Contributing

When contributing to this project:

1. Follow the existing code style
2. Run `npm run format` to ensure consistent formatting
3. Run `npm run lint` to check for any linting errors
4. Use TypeScript for type safety

## License

This project is private and proprietary.

## Support

For issues or questions, please open an issue in the repository or contact the development team.
