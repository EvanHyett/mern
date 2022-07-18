const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Joke name is required"],
        minlength: [2, "Joke name must be at least 2 characters long"]
    },
    genre: {
        type: String,
        required: [true, "Joke genre is required"],
        maxlength: [20, "Genre must not exceed 20 characters in length"]
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;