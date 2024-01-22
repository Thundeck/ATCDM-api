const Player = require("../models/player.model");
const Team = require("../models/team.model");

const getAllPlayers = async (req, res, next) => {
  try {
    const teams = await Player.find();
    res.status(200).json(teams);
  } catch (error) {
    next(error);
  }
};

const addPlayerToTeam = async (req, res, next) => {
  const { teamId } = req.params;
  const newPlayer = req.body;
  try {
    if (!teamId) throw new Error("Team ID is required");

    const teams = await Team.find().populate("players");

    const existPlayer = teams.some((team) =>
      team.players.some((player) => player.player_id === newPlayer.player_id)
    );

    if (existPlayer) throw new Error("The player is already with a team");

    const createdPlayer = await Player.create(newPlayer);
    if (!createdPlayer)
      throw new Error("An error occurred while creating the player");

    const team = await Team.findById(teamId);
    if (!team) throw new Error("Team not found");
    if (team.players.length >= 5) throw new Error("The team is now complete");

    const updateTeam = await Team.findByIdAndUpdate(team._id, {
      players: [...team.players, createdPlayer._id],
    });

    if (!updateTeam)
      throw new Error("An error occurred while updating the team");

    res.status(200).json(createdPlayer);
  } catch (error) {
    next(error);
  }
};

const deletePlayer = async (req, res, next) => {
  const { playerId, teamId } = req.params;

  try {
    if (!playerId) throw new Error("Player ID is required");
    if (!teamId) throw new Error("Team ID is required");

    const player = await Player.find({ player_id: playerId });
    if (!player) throw new Error("Player not found");

    const team = await Team.findById(teamId).populate("players");
    if (!team) throw new Error("Team not found");

    const deletedPlayer = await Player.findByIdAndDelete(player[0]._id);
    if (!deletedPlayer) throw new Error("Player not deleted");

    const newArr = team.players.filter(
      (e) => e.player_id !== player[0].player_id
    );
    console.log(newArr);

    const deletePlayerFromTeam = await Team.findByIdAndUpdate(team._id, {
      players: newArr,
    });
    if (!deletePlayerFromTeam) throw new Error("Team not deleted");

    res.status(200).json(deletedPlayer);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPlayers,
  addPlayerToTeam,
  deletePlayer,
};
