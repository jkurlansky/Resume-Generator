const express = require("express");
const { sequelize, sessionConfig } = require("./config/connection");
const { Resume, User } = require("./models");

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.send("this is working");
});


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("WERE DOING IT!"));
});