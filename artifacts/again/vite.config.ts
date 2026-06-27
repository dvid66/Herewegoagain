import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async ({ command }) => {
  const isServe = command === "serve";

  // Only parse/validate PORT when running the dev server (vite serve).
  // During build on platforms like Vercel, PORT is not required.
  const rawPort = process.env.PORT;
  let port: number | undefined = undefined;
  if (isServe) {
    if (rawPort) {
      const p = Number(rawPort);
      if (Number.isNaN(p) || p <= 0) {
        throw new Error(`Invalid PORT value: "${rawPort}"`);
      }
      port = p;
    } else {
      // sensible default for local dev
      port = 5173;
    }
  }

  // BASE_PATH is optional for builds. Default to '/'.
  const basePath = process.env.BASE_PATH ?? "/";

  const plugins = [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...(isServe && process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner()),
        ]
      : []),
  ];

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: isServe
      ? {
          port,
          strictPort: true,
          host: "0.0.0.0",
          allowedHosts: true,
          fs: {
            strict: true,
          },
        }
      : undefined,
    preview: isServe
      ? {
          port,
          host: "0.0.0.0",
          allowedHosts: true,
        }
      : undefined,
  };
});
