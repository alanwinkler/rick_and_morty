const express = require("express");
const server = express();
const morgan = require("morgan");
const router = require("../src/routes/index");
const PORT = 3001;

server.use(express.json());
server.use(morgan("dev"));
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
