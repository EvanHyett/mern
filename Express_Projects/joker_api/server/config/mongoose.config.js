const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ehyett:rootroot@mernjuly.yvt3fb0.mongodb.net/jokes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));