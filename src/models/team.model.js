const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OBJECT = mongoose.Types.ObjectId;

const TeamSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  logo: {
    type: String,
    default:
      "https://res.cloudinary.com/dvmtkbykf/image/upload/v1705685474/ATC-Dream-Match/hsjipddsfsfeirk6i1op.jpg",
  },
  players: {
    type: [OBJECT],
    ref: "player",
  },
  formation: String,
});

const Team = mongoose.model("team", TeamSchema);

module.exports = Team;
