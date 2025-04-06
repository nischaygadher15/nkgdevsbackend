import express from "express";
import "dotenv/config";
import getmail from "../Router/getEmail.js";
import cors from "cors";

let app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1 >Hello from NKGdevs Portfolio Backend Server</h1>");
  res.send();
});

app.use("/getemail", getmail);

let port = process.env.PORT;
app.listen(3000, () => console.log(`Server running on Port: ${port}`));
