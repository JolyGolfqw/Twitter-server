const User = require("../models/User.model");

module.exports.usersController = {
  addUsers: async (req, res) => {
    try {
      await User.create({
        name: req.body.name,
        saved: req.body.saved,
      });
      res.json("Пользователь добавлен");
    } catch (err) {
      res.json(`Не удалось добавить пользователя: ${err.message}`);
    }
  },

  addSaved: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: {
          saved: req.body.twit,
        },
      });
      res.json("Твит сохранен");
    } catch (err) {
      res.json(err.message);
    }
  },

  removeSaved: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $pull: {
          saved: req.params.twitId,
        },
      });
      res.json("Твит сохранен");
    } catch (err) {
      res.json(err.message);
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find().populate("saved");
      res.json(users);
    } catch (err) {
      res.json(`Не удалось вывести пользователей: ${err.message}`);
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate("saved");
      res.json(user);
    } catch (err) {
      res.json(`Не удалось добавить пользователя: ${err.message}`);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("Пользователь удален");
    } catch (err) {
      res.json(`Не удалось удалить пользователя: ${err.message}`);
    }
  },

  editUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id);
      res.json("Пользователь изменен");
    } catch (err) {
      res.json(`Не удалось изменить пользователя: ${err.message}`);
    }
  },
};
