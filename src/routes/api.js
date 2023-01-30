const express = require('express');
const productsController = require('../controller/productsController');
const router = express.Router();

//C
router.post("/createProdcuts", productsController.createProducts);
//R
router.post("/readProdcuts", productsController.readProdcuts);
//U
router.post("/updateProdcuts/:id", productsController.updateProdcuts);
//D
router.post("/deleteProdcuts/:id", productsController.deleteProdcuts);


//api Routing Endpoints..
module.exports = router;