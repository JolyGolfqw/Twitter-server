const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();

router.post("/users", usersController.addUsers);
router.patch("/users/:id/saved", usersController.addSaved);
router.patch("/users/:id/saved/twitId", usersController.removeSaved);
router.delete("/users/:id", usersController.deleteUser);
router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getUserById);
router.patch("/users/:id", usersController.editUser);

module.exports = router;
