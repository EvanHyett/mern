const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.findAllProducts);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.put('/api/products/update/:id', ProductController.updateExistingProduct);
    app.delete('/api/products/:id', ProductController.deleteExistingProduct);
}