const mongoose = require("mongoose");

const twitSchema = mongoose.Schema({
  author: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  img: String,
  text: String,

  likes: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],

  comments: [
    {
      ref: "Comment",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Twit = mongoose.model("Twit", twitSchema);

module.exports = Twit;
