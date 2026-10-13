import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const HOST = process.env.HOST || "127.0.0.1";
const PORT = Number.parseInt(process.env.PORT || "8080", 10);

const pageUrl = new URL("./public/index.html", import.meta.url);

const SECURITY_HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "no-store",
  "Content-Security-Policy": [
    "default-src 'none'",
    "script-src 'unsafe-inline'",
    "style-src 'unsafe-inline'",
    "img-src 'self' data:",
    "connect-src 'none'",
    "font-src 'none'",
    "media-src 'none'",
    "object-src 'none'",
    "frame-src 'none'",
    "base-uri 'none'",
    "form-action 'none'",
    "frame-ancestors 'none'"
  ].join("; "),
  "Referrer-Policy": "no-referrer",
  "Permissions-Policy": [
    "camera=()",
    "microphone=()",
    "geolocation=()",
    "payment=()",
    "usb=()"
  ].join(", "),
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY"
};

const server = createServer(async (req, res) => {
  let pathname;

  try {
    pathname = new URL(
      req.url || "/",
      `http://${HOST}:${PORT}`
    ).pathname;
  } catch {
    res.writeHead(400, {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store"
    });
    res.end("Bad request");
    return;
  }

  if (
    req.method !== "GET" ||
    !["/", "/index.html"].includes(pathname)
  ) {
    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    });
    res.end("Not found");
    return;
  }

  try {
    const html = await readFile(pageUrl);

    res.writeHead(200, SECURITY_HEADERS);
    res.end(html);
  } catch (error) {
    console.error("Could not load SPROUT:", error.message);

    res.writeHead(500, {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    });
    res.end("SPROUT could not load its page.");
  }
});

server.on("error", (error) => {
  console.error(
    `SPROUT could not start on ${HOST}:${PORT}: ${error.message}`
  );

  if (error.code === "EADDRINUSE") {
    console.error("Try another port, for example: PORT=8081 npm start");
  }

  process.exitCode = 1;
});

server.listen(PORT, HOST, () => {
  console.log(`SPROUT is growing at http://${HOST}:${PORT}`);
});
