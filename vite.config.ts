import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add these HMR options
    hmr: {
      overlay: true, // Show error overlays
    },
    watch: {
      usePolling: true, // Helps with some file systems
    },
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add build options for better caching
  build: {
    sourcemap: true,
  },
}));