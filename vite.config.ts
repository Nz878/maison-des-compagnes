import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// TanStack Start configuration for Vercel
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    ssr: {
      noExternal: true,
    },
  },
});
