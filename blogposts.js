import "dotenv/config";
const { APP_HOST, APP_PORT } = process.env;

const url = `${APP_HOST}${APP_PORT ? ":" + APP_PORT : ""}`;

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

export { blogPosts };
