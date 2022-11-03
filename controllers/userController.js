const express= require('express');

const router =  new express.Router();
const User = require("../models/user");



router.get('/', (req, res) => {

    res.send("Api's Are Working");

});

router.post('/saveUser', async (req, res) => {

    try {

        const user = new User(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
        console.log(`createUser is saved`);


    } catch (e) { 

        res.status(400).send("error is occuring " + e);

    }
});


router.get('/getUser', async(req,res)=>{

    try{

        const data = await User.find();
        res.status(201).send(data);

    }catch(e){

        res.status(400).send("error" + e);

    }

});


router.get('/getUserById/:id', async(req,res)=>{


    try{
        const _id = req.params.id;
        const data = await User.findById(_id);
        res.send(data);

    } catch(e){

        res.status(400).send("error" + e);

    }

});


router.get('/getUserByname/:name', async(req,res)=>{

    try{

        const name= req.params.name;
        const data =await User.findOne({name:name});
        res.status(201).send(data);

        
        if(data !=null){

            res.status(201).send(data);

        }

        else{

            res.status(201).send(name + "not found in database");

        }
    }catch (e){

        res.status(201).send("error" + e);

    }

});


router.get('/getUserByEmail/:email', async(req,res)=>{

    try{

        const email= req.params.email;
        const data =await User.findOne({email:email});
       

        if(data !=null){

            res.status(201).send(data);

        }

        else{

            res.status(201).send(email + "not found in database");

        }
    }catch (e){

        res.status(201).send("error" + e);

    }

});




module.exports=router;

