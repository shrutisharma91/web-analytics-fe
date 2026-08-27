// Central place for deployment-specific values.
// Set these in .env.local for local dev, and in Vercel's Environment Variables for prod.
export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8787"
).replace(/\/$/, "");

export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "";

/** Name of the published tracker package, shown in the in-app install steps. */
export const TRACKER_PACKAGE =
  import.meta.env.VITE_TRACKER_PACKAGE ?? "webanalytic-tracker";

/** screenshotmachine.com API key used for project thumbnails. Get a free key at
 *  https://www.screenshotmachine.com — the value is visible in the client bundle. */
export const SCREENSHOT_KEY = import.meta.env.VITE_SCREENSHOT_KEY ?? "";
