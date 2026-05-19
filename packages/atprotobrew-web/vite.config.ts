import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tamaguiPlugin } from "@tamagui/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import { lingui } from "@lingui/vite-plugin";
import macros from "vite-plugin-babel-macros";

export default defineConfig({
  plugins: [
    react(),
    lingui(),
    macros(),
    tamaguiPlugin({
      config: path.resolve(
        __dirname,
        "node_modules/@atprotobrew/common/tamagui.config.ts",
      ),
      components: ["tamagui"],
    }),
    tailwindcss(),
    babel({
      babelConfig: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  server: {
    // Bind to all interfaces so the OAuth redirect to http://127.0.0.1:<port>/
    // reaches the dev server even on macOS where localhost resolves to ::1 (IPv6).
    host: true,
  },
});
