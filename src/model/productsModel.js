const mongoose = require('mongoose');


const dataShcema = mongoose.Schema({
    ProductsName: { type: String },
    ProductsCode: { type: String },
    Img: { type: String },
    unitPrice: { type: String },
    Qty: { type: String },
    TotalPrice: { type: String },
    CreatedDate: { type: Date, default: Date.now() }
}, { versionKey: false }
)
const ProductsModel = mongoose.model('Products', dataShcema);
module.exports = ProductsModel;