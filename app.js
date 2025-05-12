import "dotenv/config";
import express from "express";
import { blogPosts } from "./blogposts.js";
const app = express();

const { APP_HOST, APP_PORT } = process.env;
const url = `${APP_HOST}${APP_PORT ? ":" + APP_PORT : ""}`;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json(blogPosts);
});

app.listen(APP_PORT, () => {
  console.log(`Listening on ${url}`);
});
