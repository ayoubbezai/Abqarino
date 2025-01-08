import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  base: "/",
  server: {
    historyApiFallback: true, // Ensures proper fallback for SPA routing
  },
  build: {
    outDir: "dist", // Directory for production build
  },
});
