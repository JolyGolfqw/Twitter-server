const { Router } = require("express");
const { twitsController } = require("../controllers/twits.controller");

const router = Router();

router.post("/twits", twitsController.addTwit);
router.patch("/twits/:id", twitsController.editTwit);
router.patch("/twits/:id/likes", twitsController.addLike);
router.patch("/twits/:id/likes/:userId", twitsController.removeLike);
router.patch("/twits/:id/comments", twitsController.addComment);
router.patch("/twits/:id/comments/:userId", twitsController.removeComment);
router.delete("/twits/:id", twitsController.deleteTwit);
router.get("/twits/:id", twitsController.getTwitById);
router.get("/twits/:id/comments", twitsController.getTwitComments);
router.get("/twits", twitsController.getTwit);

module.exports = router;
