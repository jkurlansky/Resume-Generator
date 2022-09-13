const router = require("express").Router();

router.get("/", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  console.log("loggedIn", loggedIn);

  res.render("home", {
    loggedIn,
  });
});

router.get("/login", (req, res) => {
  res.render("login", { layout: "main" });
});

router.get("/signup", (req, res) => {
  res.render("sign-up", { layout: "main" });
});

module.exports = router;
