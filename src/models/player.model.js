const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OBJECT = mongoose.Types.ObjectId;

const PlayerSchema = new Schema({
  player_id: {
    type: String,
    require: true,
  },
  team_id: {
    type: OBJECT,
    ref: "team",
  },
  player_name: {
    type: String,
    require: true,
  },
  player_image: {
    type: String,
    require: true,
  },
  player_number: {
    type: Number,
    require: false,
  },
  player_type: String,
  image: {
    type: String,
  },
});

const Player = mongoose.model("player", PlayerSchema);

module.exports = Player;
