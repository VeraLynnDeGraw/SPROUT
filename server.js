import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const server = createServer(async (req, res) => {
  if (req.url !== "/" && req.url !== "/index.html") {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  try {
    const html = await readFile(
      new URL("./public/index.html", import.meta.url)
    );

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    res.end(html);
  } catch {
    res.writeHead(500);
    res.end("SPROUT could not load its page.");
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log("SPROUT is growing at http://127.0.0.1:8080");
});
