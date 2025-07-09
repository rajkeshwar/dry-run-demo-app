import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
    emptyOutDir: true, // also necessary
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
