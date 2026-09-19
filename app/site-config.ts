// Set SITE_URL to the public origin before building a public deployment.
const configuredUrl = process.env.SITE_URL;
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;
if (siteUrl && !["http:", "https:"].includes(siteUrl.protocol)) {
  throw new Error("SITE_URL must be an absolute HTTP(S) URL.");
}
export const siteDescription =
  "A customer-owned AI operating layer that connects models, data and business systems, then runs governed agents to complete work across them.";
