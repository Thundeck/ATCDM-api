const { Router } = require("express");
const {
  addPlayerToTeam,
  deletePlayer,
} = require("../controllers/player.controller");
const router = Router();

router.post("/:teamId", addPlayerToTeam);
router.delete("/:playerId/:teamId", deletePlayer);

module.exports = router;
