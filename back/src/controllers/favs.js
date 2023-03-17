const favs = require("../utils/favs");

const postFav = (req, res) => {
  const { character } = req.body;
  favs.push(character);
  res.status(201).json(favs);
};

const getFavs = (req, res) => {
  res.status(201).json(favs);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id !== Number(id));
  res.status(200).json(favs);
};

module.exports = { postFav, getFavs, deleteFav };
