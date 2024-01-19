const { Router } = require("express");
const { getAllPlayers } = require("../controllers/player.controller");
const router = Router();

router.get("/", getAllPlayers);

module.exports = router;
