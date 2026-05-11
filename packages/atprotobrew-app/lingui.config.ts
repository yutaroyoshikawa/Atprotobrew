import { defineConfig } from "@lingui/cli";
import rootConfig from "../../lingui.config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  ...rootConfig,
  rootDir: __dirname,
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["<rootDir>/components"],
      exclude: ["**/node_modules/**", "**/*.test.*"],
    },
  ],
});
