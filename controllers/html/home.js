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

router.get("/login", (req, res) => {
  res.render("login", { layout: "main" });
});

router.get("/signup", (req, res) => {
  res.render("sign-up", { layout: "main" });
});

router.get("/resumebuilder", (req, res) => {
  const loggedIn = req.session.logged_in;
  console.log("loggedIn", loggedIn);

  res.render("formfill", {
    loggedIn,
  });
});

router.get("/resume", async (req, res) => {
  try {
    const resumeData = await Resume.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const resume = resumeData.get({ plain: true });

    res.render("resumetemplate", {
      ...resume,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
