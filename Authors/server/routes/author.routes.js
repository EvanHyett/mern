const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.get('/api', AuthorController.findAllAuthors);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.put('/api/author/update/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/author/:id', AuthorController.deleteExistingAuthor);
}