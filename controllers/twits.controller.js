const Twit = require("../models/Twit.model");

module.exports.twitsController = {
  addTwit: async (req, res) => {
    try {
      await Twit.create({
        author: req.body.author,
        img: req.body.img,
        text: req.body.text,
      });
      res.json("Twit добавлен");
    } catch (err) {
      res.json(err.message);
    }
  },

  addLike: async (req, res) => {
    try {
      await Twit.findByIdAndUpdate(req.params.id, {
        $push: {
          likes: req.body.like,
        },
      });
      res.json("Лайк поставлен");
    } catch (err) {
      res.json(err.message);
    }
  },

  removeLike: async (req, res) => {
    try {
      await Twit.findByIdAndUpdate(req.params.id, {
        $pull: {
          likes: req.params.userId,
        },
      });
      res.json("Лайк удален");
    } catch (err) {
      res.json(err.message);
    }
  },

  addComment: async (req, res) => {
    try {
      await Twit.findByIdAndUpdate(req.params.id, {
        $push: {
          comments: req.body.comment,
        },
      });
      res.json("Комментарий добавлен");
    } catch (err) {
      res.json(err.message);
    }
  },

  removeComment: async (req, res) => {
    try {
      await Twit.findByIdAndUpdate(req.params.id, {
        $pull: {
          comments: req.params.userId,
        },
      });
      res.json("Комментарий удален");
    } catch (err) {
      res.json(err.message);
    }
  },

  getTwitComments: async (req, res) => {
    try {
      const comments = await Twit.findById(req.params.id, {
        comments: 1,
      }).populate({ path: "comments", populate: { path: "author" } });
      res.json(comments);
    } catch (err) {
      res.json(err.message);
    }
  },

  getTwit: async (req, res) => {
    try {
      const twits = await Twit.find()
        .populate({ path: "comments", populate: { path: "author" } })
        .populate("likes", { name: 1 });
      res.json(twits);
    } catch (err) {
      res.json(err.message);
    }
  },

  getTwitById: async (req, res) => {
    try {
      const twit = await Twit.findById(req.params.id);
      res.json(twit);
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteTwit: async (req, res) => {
    try {
      await Twit.findByIdAndDelete(req.params.id);
      res.json("Твит удален");
    } catch (err) {
      res.json(err.message);
    }
  },

  editTwit: async (req, res) => {
    try {
      await Twit.findByIdAndUpdate(req.params.id, {
        author: req.body.author,
        img: req.body.img,
        text: req.body.text,
      });
      res.json(twits);
    } catch (err) {
      res.json(err.message);
    }
  },
};
