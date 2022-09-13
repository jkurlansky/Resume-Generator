const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("home");
});
router.get("/logout", async (req, res) => {
  res.render("home");
});
router.get("/signup", async (req, res) => {
  res.render("login");
});

module.exports = router;
