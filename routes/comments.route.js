const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/comments", commentsController.addComment);
router.patch("/comments/:id", commentsController.editComment);
router.get("/comments", commentsController.getComments);
router.delete("/comments/:id", commentsController.deleteComment);

module.exports = router;
