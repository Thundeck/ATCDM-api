const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OBJECT = mongoose.Types.ObjectId;

const TeamSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  logo: String,
  players: {
    type: [OBJECT],
    ref: "player",
  },
  formation: String,
});

const Team = mongoose.model("team", TeamSchema);

module.exports = Team;
