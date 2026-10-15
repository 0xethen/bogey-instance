import { defineConfig } from "@bogey/config/define";

export default defineConfig({
  brand: {
    name: "My Hacks",
    shortName: "Hacks",
    theme: "default",
    icons: { default: "/brand/logo.svg", dark: "/brand/logo.svg" },
  },
  // Where the database calls the app to send queued email: your public address, e.g.
  // "https://bogey.example.org". Admins can't change it in the app.
  // appUrl: "https://bogey.example.org",
  plugins: { disabled: [] },
  // compose.yml's Caddy overwrites X-Forwarded-For, so the app can trust it.
  network: { trustProxy: true },
  security: {
    verboseErrors: false,
    // Instance admins need an authenticator app. Set here, the app can't turn it off.
    requireAdminMfa: true,
  },
  repository: false,
  updates: { check: true },
});
