import fs from "fs";

export default function Routes() {
  const routes = fs
    .readdirSync(__dirname)
    .filter((files) => !files.startsWith("index"))
    .map((file) => {
      const Route = require(`./${file}`).default;
      return Route.router;
    });
  return routes;
}
