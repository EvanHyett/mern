const express = require('express');
const cors = require('cors') 
const app = express();

app.use(cors()) 
require('./server/config/mongoose.config');

app.use(express.json() );
app.use(express.urlencoded({ extended: true }));


const AllProductRoutes = require('./server/routes/product.routes');
AllProductRoutes(app);




app.listen(8000, () => {
    console.log("Listening at Port 8000")
})