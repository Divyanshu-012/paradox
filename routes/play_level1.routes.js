const { Router } = require("express");
const {
  checkQuestion,
  checkAnswer,
} = require("../controllers/play_level1.controller");
const { unlockHint } = require("../controllers/hint.controller");

const router = Router();

router.post("/ques", checkQuestion);
router.post("/answer", checkAnswer);
router.post("/hint", unlockHint);

module.exports = router;