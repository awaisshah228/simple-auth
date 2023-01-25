const router = require("express").Router();
const validateRequest = require("../middlewares/validate-request");
const { body } = require("express-validator");


/**
 * @swagger
 * /test:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *
 */

router.get("/", (req,res)=>{
    res.json({msg : "working"})
})




module.exports = router;
