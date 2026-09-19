import { defineConfig } from "@playwright/test";
const production = process.env.TEST_PRODUCTION === "1";
const port = production ? 3100 : 3000;
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  use: {
    baseURL: `http://localhost:${port}`,
    launchOptions: {
      executablePath: process.env.CHROME_PATH || "/usr/bin/google-chrome",
      args: ["--no-sandbox"],
    },
  },
  webServer: {
    command: production ? "npm run start -- --port 3100" : "npm run dev",
    url: `http://localhost:${port}`,
    reuseExistingServer: !production,
    timeout: 120000,
  },
  reporter: "list",
});
