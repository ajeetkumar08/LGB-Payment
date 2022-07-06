const express = require("express"); 
const service = require("./payment.controller");
const router = express.Router();

router
.route("/payment/checkoutSession")
.post(service.checkoutSession);

 

module.exports = router;