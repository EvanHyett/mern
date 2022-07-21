const Author = require("../models/author.model")

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => {
            res.json({results: allAuthors})
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(oneAuthor => res.json({author: oneAuthor}))
        .catch(err => res.json({message: "Something went wrong fetching the author", error: err}));
}

module.exports.createAuthor = (req, res) => {
    const newAuthor = req.body
    Author.create(newAuthor)
        .then(author =>{
            res.json({results: author})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedAuthor => res.json({author: updatedAuthor}))
        .catch(err => res.json({message: 'Something went wrong updating the product', error: err}));
}

module.exports.deleteExistingAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: 'Something went wrong deleting Author', error: err}));
}