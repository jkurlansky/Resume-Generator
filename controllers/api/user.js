const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("this is the user route");
  res.end();
});


module.exports = router;