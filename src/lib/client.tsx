import { createClient } from "microcms-js-sdk";

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "mura-blog",
  apiKey: process.env.API_KEY,
});
