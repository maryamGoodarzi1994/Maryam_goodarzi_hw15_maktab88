const { join } = require("node:path");
const router = require("express").Router();
const { isLoggedIn } = require("../controllers/validator-controller");

router.get("/login", (req, res) => {
  res.status(200).render(join(__dirname, "../views/login"));
});

router.get("/signup", (req, res) => {
  res.status(200).render(join(__dirname, "../views/signup"));
});

router.get("/profile/:username", isLoggedIn(), (req, res) => {
  console.log(req.validationStatus.isLoggedIn);
  if (!req.validationStatus.isLoggedIn) {
    return res.status(401).json({
      status: "fail",
      message: req.validationStatus.message,
    });
  }
  res.status(200).render(join(__dirname, "../views/profile"));
});

module.exports = router;
