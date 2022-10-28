const mongoose = require('mongoose');

const db="mongodb+srv://codegod:neeljs@cluster0.smbb6zz.mongodb.net/io-app?retryWrites=true&w=majority"
mongoose.connect(db, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {

    console.log("connection established");

}).catch((e) => {

    console.log("error");
})
