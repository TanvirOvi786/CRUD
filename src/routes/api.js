const express = require('express');
const productsController = require('../controller/productsController');
const router = express.Router();

//C
router.post("/createProducts", productsController.createProducts);
//R
router.post("/readProducts", productsController.readProdcuts);
//R by ID
router.get("/readProdcutsById/:id", productsController.readProdcutsById);

//U
router.post("/updateProducts/:id", productsController.updateProdcuts);
//D
router.post("/deleteProducts/:id", productsController.deleteProdcuts);


//api Routing Endpoints..
module.exports = router;