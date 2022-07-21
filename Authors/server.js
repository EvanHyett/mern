const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors()) 
require('./server/config/mongoose.config');

app.use(express.json() );
app.use(express.urlencoded({ extended: true }));

const AllAuthorRoutes = require('./server/routes/author.routes');
AllAuthorRoutes(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})