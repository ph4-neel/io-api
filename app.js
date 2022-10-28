const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./db/config');
const User = require("./models/user");


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.get('/', (req, res) => {

    res.send("Api's Are Working");

});

app.post('/saveUser', async (req, res) => {

    try {

        const user = new User(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
        console.log(createUser);


    } catch (e) {

        res.status(400).send("error is occuring " + e);

    }
});


app.get('/getUser', async(req,res)=>{

    try{

        const data = await User.find();
        res.status(201).send(data);

    }catch(e){

        res.status(400).send("error" + e);

    }

});







app.listen(port, () => {

    console.log("server is working");


});