import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 447,
  site: "resilia",
  domains: ["deco-sites-resilia.deno.dev"],
});