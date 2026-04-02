const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const role = require("../middleware/role");

const ctrl = require("../controllers/recordController");

// Admin only
router.post("/", auth, role(["admin"]), ctrl.createRecord);
router.put("/:id", auth, role(["admin"]), ctrl.updateRecord);
router.delete("/:id", auth, role(["admin"]), ctrl.deleteRecord);

// Admin + Analyst
router.get("/", auth, role(["admin", "analyst"]), ctrl.getRecords);

module.exports = router;