const express = require('express');


const router =  new express.Router();
const Soft = require('../models/softskills');



router.post('/saveSoft', async (req, res) => {

    try {

        const Softskills = new Soft(req.body);
        const createSoft = await Softskills.save();
        res.status(201).send(createSoft);
        console.log(`createUser is saved`);


    } catch (e) { 

        res.status(400).send("error is occuring " + e);

    }
});


router.get('/getSoft',async(req, res)=>{

    try {

        const data = await Soft.find();
        res.status(201).send(data);
        console.log(data);


    } catch(e){

        res.status(401).send(" some error is there");


    }

});

module.exports=router;
