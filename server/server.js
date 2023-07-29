const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("New User Connected!");
});

const PORT = 3030;
const URL = `https://localhost:${PORT}/`;

server.listen(PORT, () => console.log(`listening on ${URL}`));
