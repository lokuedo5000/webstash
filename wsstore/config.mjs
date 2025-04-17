import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  name: "wsstore",
  type: "server",
  server: {
    port: 3000,
    name: "wsstore-server",
    routers: path.join(__dirname, "src/server/index.mjs"),
    pathViews: path.join(__dirname, "src/server/views"),
    pathPublic: [path.join(__dirname, "src/server/public")],
    watchFile: true,
  },
  preload: path.join(__dirname, "preload.mjs"),
  tab: {},
};
