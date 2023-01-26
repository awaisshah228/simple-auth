const express = require("express");
const requireAuth = require("./../middlewares/require-auth");
const router = express.Router();
const memberCtrl = require("../controllers/memberCtrl");
const validateRequest = require("../middlewares/validate-request");
const { body, param } = require("express-validator");

router.post(
  "/",
  requireAuth,
  [
    body("cnic").not().isEmpty(),
    body("qr_code").not().isEmpty(),
    body("name").not().isEmpty(),
  ],

  validateRequest,
 memberCtrl.addMember
);
router.get(
  "/:qr",
  // requireAuth,
  memberCtrl.getMember
);

module.exports = router;
