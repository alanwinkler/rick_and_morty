const express = require("express");
const server = express();
const morgan = require("morgan");
const router = require("../src/routes/index");
const cors = require("cors");
const PORT = 3001;

server.use(express.json());
server.use(cors()); // esto permite acceder a todos a la info del back
server.use(morgan("dev"));
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
