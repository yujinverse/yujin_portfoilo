import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// Multi-page app: each top-level HTML file is its own build entry.
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        experience: fileURLToPath(new URL("./experience.html", import.meta.url)),
        project: fileURLToPath(new URL("./project.html", import.meta.url)),
        activities: fileURLToPath(new URL("./activities.html", import.meta.url)),
      },
    },
  },
  server: {
    port: 5173,
  },
});
