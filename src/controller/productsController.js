const ProductsModel = require('../model/productsModel');

//c= create 
exports.createProducts = (req, res) => {
    let reqBody = req.body;
    ProductsModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Data create Failed", data: err });
        } else {
            res.status(200).json({ status: "Data create Success", data: data });
        }
    })
}

//R=Read
exports.readProdcuts = (req, res) => {
    let query = {};


    ProductsModel.find(query, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Data Read Failed", data: err });
        } else {
            res.status(200).json({ status: "Data Read Success", data: data });
        }
    })
}
//R=Read byID
exports.readProdcutsById = (req, res) => {
    let id = req.params.id;
    let query = { _id: id };

    ProductsModel.find(query, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Data Read Failed", data: err });
        } else {
            res.status(200).json({ status: "Data Read Success", data: data });
        }
    })
}

//U=Update
exports.updateProdcuts = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }
    let reqBody = req.body;
    ProductsModel.updateOne(query, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Data Updates Failed", data: err });
        } else {
            res.status(200).json({ status: "Data Updates Success", data: data });
        }
    })
}

//D=Delete
exports.deleteProdcuts = (req, res) => {
    let id = req.params.id;
    let query = { _id: id }

    ProductsModel.remove(query, (err, data) => {
        if (err) {
            res.status(400).json({ status: "Data Delete Failed", data: err });
        } else {
            res.status(200).json({ status: "Data Delete Success", data: data });
        }
    })
}