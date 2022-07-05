const express = require("express"); 
const service = require("./payment.controller");
const router = express.Router();

router
.route("/payment/checkoutSession")
.post(service.checkout);

 

module.exports = router;