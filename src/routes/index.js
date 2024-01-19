const { Router } = require("express");
const router = Router();

const team = require("./team.route");
const player = require("./player.route");

router.use("/team", team);
router.use("/player", player);

module.exports = router;
