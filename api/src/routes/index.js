const { Router } = require("express");
const dogs = require("./dogs");
const temperament = require("./temperament");
const post = require("./post");
const router = Router();

router.use("/dogs", dogs);
router.use("/temperament", temperament);
router.use("/dog", post);

module.exports = router;