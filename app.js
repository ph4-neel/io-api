const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./db/config');
const userController = require('./controllers/userController');



var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const router =new express.Router();

app.use(userController);


app.listen(port, () => {

    console.log("server is working");


});