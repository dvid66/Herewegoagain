import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

export default defineConfig(async ({ command }) => {
  const isServe = command === "serve";

  // Only parse/validate PORT when running the dev server (vite serve).
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
      port = 5173;
    }
  }

  // BASE_PATH optional for build; default to '/'
  const basePath = process.env.BASE_PATH ?? "/";

  const plugins = [
    mockupPreviewPlugin(),
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
        ]
      : []),
  ];

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
      },
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: isServe
      ? {
          port,
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
