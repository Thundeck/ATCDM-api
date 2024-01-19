const Player = require("../models/player.model");

const getAllPlayers = async (req, res) => {
  try {
    const teams = await Player.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(error.status).send(error);
  }
};

module.exports = {
  getAllPlayers,
};
