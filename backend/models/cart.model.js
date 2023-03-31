const mongoose = require("mongoose");

const schema = mongoose.Schema({
    userId: String,
    prodId: String,
    name: String,
    image: String,
    brand: String,
    originalPrice: Number,
    discountPrice: Number,
    category: String,
    quantity: Number
})

const cartModel = mongoose.model("cart", schema);

module.exports = { cartModel };


// "userId": "64268574502c3084e556d596",
//     "name": "Sofa",
//     "image": "http://link.com",
//     "brand": "Sofa brand",
//     "originalPrice": 123,
//     "discountPrice": 32,
//     "category": furniture

// {
//     "prodId":"64268bdf5c451fa3d60665fb",
//     "userId": "64268574502c3084e556d596",
//       "name": "Sofa",
//       "image": "http://link.com",
//       "brand": "Sofa brand",
//       "originalPrice": 123,
//       "discountPrice": 32,
//       "category": "furniture"
//       "quantity":4
//   }