const express = require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller');
const router = express.Router();

// create a order
router.post("/", createAOrder);

// get orders by email
router.get("/email/:email", getOrderByEmail);

module.exports = router;