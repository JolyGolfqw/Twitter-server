const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://overlord:Edb22edb22@cluster0.e2awg.mongodb.net/Twitter")
  .then(() => console.log("Подключение к MongoDB прошло успешно"))
  .catch(() => console.log("Сбой при подключении"));

app.use(require("./routes/users.route"));
app.use(require("./routes/twits.route"));
app.use(require("./routes/comments.route"));

app.listen(3000, () => {
  console.log("Сервер запушен");
});
