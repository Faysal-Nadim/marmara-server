const express = require("express");
const { getCommodityPrice } = require("../utils");
const router = express.Router();

router.get("/commodity/get-price", getCommodityPrice);

module.exports = router;
