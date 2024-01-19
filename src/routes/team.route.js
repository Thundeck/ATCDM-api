const { Router } = require("express");
const {
  getAllTeams,
  createTeam,
  getTeamDetails,
} = require("../controllers/team.controller");
const router = Router();

router.get("/", getAllTeams);
router.post("/", createTeam);
router.get("/:id", getTeamDetails);

module.exports = router;
