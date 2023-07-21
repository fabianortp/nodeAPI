const mongoose = require('mongoose')

//Schema
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: String,
            required: false,

        }
    },
    {
        timestamps: true
    }
)

//Product model. name: 'Product'

const Product = mongoose.model('Product', productSchema);

module.exports = Product;