const Product = require("../models/product.model")

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json({results: allProducts})
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.createProduct = (req, res) => {
    const newProduct = req.body
    Product.create(newProduct)
        .then(product =>{
            res.json({results: product})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json({product: oneProduct}))
        .catch(err => res.json({message: "Something went wrong fetching the product", error: err}));
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => res.json({product: updatedProduct}))
        .catch(err => res.json({message: 'Something went wrong updating the product', error: err}));
}

module.exports.deleteExistingProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: 'Something went wrong deleting product', error: err}));
}