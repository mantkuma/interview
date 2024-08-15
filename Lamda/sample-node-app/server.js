const http = require("http");
let app = require("./app");
const server = http.createServer(app);
server.listen(4000);
