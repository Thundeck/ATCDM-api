const { Router } = require("express");
const {
  getAllTeams,
  createTeam,
  getTeamDetails,
  updateTeam,
} = require("../controllers/team.controller");
const router = Router();

router.get("/", getAllTeams);
router.post("/", createTeam);
router.get("/:id", getTeamDetails);
router.put("/:id", updateTeam);

module.exports = router;
