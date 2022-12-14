const router = require("express").Router();
const userRoutes = require("./userRoutes");
const resumeRoutes = require("./resumeRoutes");

router.use("/users", userRoutes);
router.use("/resume", resumeRoutes);

module.exports = router;
