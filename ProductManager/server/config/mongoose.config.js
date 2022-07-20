const mongoose = require('mongoose');
require("dotenv").config();
const DATABASE = process.env.MY_DATABASE
mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));