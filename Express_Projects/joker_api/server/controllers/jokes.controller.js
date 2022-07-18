const Joke = require("../models/jokes.model")

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: 'Something went wrong fetching jokes', error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: 'Something went wrong fetching the joke', error: err}));
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({joke: newlyCreatedJoke}))
        .catch(err => res.json({message: 'Something went wrong creating the joke', error: err}));
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json({user: updatedJoke}))
        .catch(err => res.json({message: 'Something went wrong updating the joke', error: err}));
}

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: 'Something went wrong deleting joke', error: err}));
}