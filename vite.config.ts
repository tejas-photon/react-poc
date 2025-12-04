
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      'use-sync-external-store': 'use-sync-external-store/shim'
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  },
      build: {
        target: "esnext",
        rollupOptions: {
            external: ["react", "react-dom"], // Mark React as external
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});
