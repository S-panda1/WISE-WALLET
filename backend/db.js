const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/wisewallet"

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(()=>{console.log("connected to mongo successfully");})
    .catch((err)=>{console.log(err);})
}
module.exports = connectToMongo;

// mongoose.connect("mongodb://localhost:27017/wisewallet",
//     ()=>{console.log("connected to mongo successfully");})
//     .catch((err)=>{console.log(err);})