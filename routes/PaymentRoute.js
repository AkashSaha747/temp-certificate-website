const express = require('express');
const { paymentController } = require('../controllers/PaymentController');
const router = express.Router();

// Create a new certification
router.post('/payment',paymentController);

module.exports = router;

