const router = require("express").Router();
const { Resume, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  const loggedIn = req.session.logged_in;
  console.log("loggedIn", loggedIn);

  res.render("home", {
    loggedIn,
  });
});

router.get("/signup", (req, res) => {
  res.render("sign-up", { layout: "main" });
});

router.get("/resumebuilder", (req, res) => {
  res.render("formfill", { layout: "main" });
});

router.get("/resumetemplate", (req, res) => {
  res.render("resumetemplate", { layout: "main" });
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Resume }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
