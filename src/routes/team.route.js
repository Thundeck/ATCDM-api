const { Router } = require("express");
const {
  getAllTeams,
  createTeam,
  getTeamDetails,
  updateTeam,
  deleteTeam,
} = require("../controllers/team.controller");
const router = Router();

router.get("/", getAllTeams);
router.post("/", createTeam);
router.get("/:id", getTeamDetails);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

module.exports = router;
