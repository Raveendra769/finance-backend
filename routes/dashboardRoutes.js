const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const role = require("../middleware/role");
const { getSummary } = require("../controllers/dashboardController");

router.get("/", auth, role(["admin", "analyst"]), getSummary);

module.exports = router;