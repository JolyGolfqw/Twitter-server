const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  saved: [
    {
      ref: "Twit",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
