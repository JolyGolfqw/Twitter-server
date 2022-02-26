const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addComment: async (req, res) => {
    try {
      await Comment.create({
        author: req.body.author,
        comment: req.body.comment,
      });
      res.json("Комментарий добавлен");
    } catch (err) {
      res.json(`Не удалось добавить комментарий: ${err.message}`);
    }
  },

  getComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.json("Комментарий удален");
    } catch (err) {
      res.json(err.message);
    }
  },

  editComment: async (req, res) => {
    try {
      await Comment.findByIdAndUpdate(req.params.id);
      res.json("Комментарий изменен");
    } catch (err) {
      res.json(err.message);
    }
  },
};
