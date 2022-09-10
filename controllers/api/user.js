const { User } = require("../../models");
const router = require("express").Router();

/**
 * /api/user
 */
router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    return res.json({ message: "You are logged in!" });
  } else {
    return res.json({ message: "You are not logged in" });
  }
});

/**
 * Create a new User Route
 * /api/user
 */
router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  if ((!username, !email, !password)) {
    return res
      .status(400)
      .json({ message: "Please enter all of the info!" });
  }
  try {
    const newUser = await User.create({
      username,
      email,
      password,
    });
    //Session variables based on on the logged in user
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = newUser.id;
      return res.status(201).json(newUser);
    });
  } catch (error) {
    console.log("🚀 ~ file: user.js ~ line 26 ~ router.post ~ error", error);
    return res
      .status(500)
      .json({ message: "router.post error" });
  }
});

/**
 * Create a new User Route
 * /api/user/login
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    return res
      .status(400)
      .json({ message: "Please enter both email and password!" });
  }

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    const isValidPassword = user.checkPassword(password);

    if (isValidPassword) {
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = user.id;
        return res.status(200).json(user);
      });
    } else {
      res.status(404).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    console.log("🚀 ~ file: user.js ~ line 26 ~ router.post ~ error", error);
    return res
      .status(500)
      .json({ message: "router.post error" });
  }
});


/**
 * Logout
 * /api/user/login
 */
router.post("/logout", async (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;

