const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  color_code: {
    type: String
  },
  color_name: {
    type: String
  },
  guild_id: {
    type: String
  }
})

module.exports = mongoose.model("Colors", schema)
