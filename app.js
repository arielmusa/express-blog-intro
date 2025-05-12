import "dotenv/config";
const { APP_HOST, APP_PORT } = process.env;
import express from "express";
const app = express();

const url = `${APP_HOST}${APP_PORT ? ":" + APP_PORT : ""}`;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

const blogPosts = [
  {
    title: "Ciambellone",
    img_url: `${url}/images/ciambellone.jpeg`,
  },
  {
    title: "Cracker barbabietola",
    img_url: `${url}/images/cracker_barbabietola.jpeg`,
  },
  {
    title: "Pane fritto dolce",
    img_url: `${url}/images/pane_fritto_dolce.jpeg`,
  },
  {
    title: "Pasta barbabietola",
    img_url: `${url}/images/pasta_barbabietola.jpeg`,
  },
  {
    title: "Torta paesana",
    img_url: `${url}/images/torta_paesana.jpeg`,
  },
];

app.get("/bacheca", (req, res) => {
  res.json(blogPosts);
});

app.listen(APP_PORT, () => {
  console.log(`Listening on ${url}`);
});
