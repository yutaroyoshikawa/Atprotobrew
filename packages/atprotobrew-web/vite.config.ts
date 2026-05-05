import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import path from "node:path";
import { tamaguiPlugin } from "@tamagui/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
    tamaguiPlugin({
      config: path.resolve(__dirname, "node_modules/common/tamagui.config.ts"),
      components: ["tamagui"],
    }),
  ],
  resolve: {
    extensions: [".web.js", ".js", ".ts", ".jsx", ".tsx"],
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: [".web.js", ".js", ".ts", ".jsx", ".tsx"],
    },
  },
  server: {
    // Bind to all interfaces so the OAuth redirect to http://127.0.0.1:<port>/
    // reaches the dev server even on macOS where localhost resolves to ::1 (IPv6).
    host: true,
  },
});
