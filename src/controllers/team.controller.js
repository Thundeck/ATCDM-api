const Player = require("../models/player.model");
const Team = require("../models/team.model");
const cloudinary = require("../utils/cluodinary");

const getAllTeams = async (req, res, next) => {
  try {
    const teams = await Team.find().populate("players");
    res.status(200).json(teams);
  } catch (error) {
    next(error);
  }
};

const getTeamDetails = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) throw new Error("Team ID is required");
    const teams = await Team.findById(id).populate("players");
    if (!teams) throw new Error("Team not found");
    res.status(200).json(teams);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateTeam = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    if (!id) throw new Error("Team ID is required");
    const teams = await Team.findById(id);
    if (!teams) throw new Error("Team not found");
    const upatedTeam = await Team.findByIdAndUpdate(id, body);
    if (!upatedTeam) throw new Error("Team not updated");

    res.status(200).json(upatedTeam);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteTeam = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    if (!id) throw new Error("Team ID is required");
    const teams = await Team.findById(id);
    if (!teams) throw new Error("Team not found");
    const deletedTeam = await Team.findOneAndDelete(id);
    const deletingPlayers = await Player.deleteMany({ team_id: id });

    res.status(200).json(deletedTeam);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createTeam = async (req, res, next) => {
  console.log("llega");
  const newTeam = { ...req.body };

  try {
    if (!newTeam.name) throw new Error("Team name is required");
    const teams = await Team.find();
    if (teams.length >= 2) throw new Error("Only two teams are allowed");
    if (newTeam.logo) {
      const imageUploaded = await cloudinary.uploader.upload(newTeam.logo, {
        folder: "ATC-Dream-Match",
      });
      newTeam.logo = imageUploaded.secure_url;
    }
    console.log(newTeam);
    const team = await Team.create(newTeam);
    if (!team)
      throw new Error("An error occurred while creating the equipment");

    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTeams,
  createTeam,
  getTeamDetails,
  updateTeam,
  deleteTeam,
};
