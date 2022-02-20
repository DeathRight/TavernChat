import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import mix, { vercelAdapter } from "vite-plugin-mix";
import mkcert from "vite-plugin-mkcert";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import type { UserConfigFn, UserConfig } from "vite";
const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config: UserConfig = {
    server: {
      https: true,
    },
    plugins: [
      mix({
        handler: "./api.ts",
        adapter: vercelAdapter(),
      }),
      react(),
      tsconfigPaths(),
      legacy(),
      mkcert({
        source: "coding",
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
          },
        },
      },
    },
  };
  return config;
};

export default defineConfig;
