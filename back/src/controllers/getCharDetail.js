const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetail(req, res) {
  const { detailId } = req.params;
  try {
    const response = await axios(URL + detailId);
    const character = {
      id: response.data.id,
      name: response.data.name,
      species: response.data.species,
      image: response.data.image,
      gender: response.data.gender,
      status: response.data.status,
      origin: response.data.origin?.name,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

// const getCharDetail = (res, id) => {
//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     // como usamos axios, el response no hace falta transformarlo a json, en fetch sí
//     .then((response) => response.data)
//     .then((data) => {
//       const character = {
//         id: data.id,
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         status: data.status,
//         origin: data.origin?.name
//         // el ? comprueba que exista para hacer lo siguiente
//       };
//       res
//         .writeHead(200, { "Content-Type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch((err) => {
//       res
//         .writeHead(500, { "Content-Type": "text/plain" })
//         .end(`Personaje con id ${id} no encontrado`)
//         //.end({"message": "Mensaje de error"})
//     });
// };

module.exports = { getCharDetail };
