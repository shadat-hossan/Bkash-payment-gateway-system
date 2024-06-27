const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const middleware = require("../middlewares/middleware")

router.post('/bkash/payment/create', middleware.bkauh_auth, paymentController.payment_create);

module.exports = router;
