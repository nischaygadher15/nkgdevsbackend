import express from "express";

let router = express.Router();

router.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1 >Hello from NKGdevs Portfolio Backend Server</h1>");
  res.send();
});

export default router;
