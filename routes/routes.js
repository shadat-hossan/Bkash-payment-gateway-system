const router = require("express").Router();
const paymentController = require("../controllers/paymentController")

router.post("bkash/payment/create", paymentController.payment_create);


module.exports = router