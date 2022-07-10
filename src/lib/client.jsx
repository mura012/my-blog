import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "mura-blog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "f08a795e2dd84b33ae665cc0fd162be8909a",
});
