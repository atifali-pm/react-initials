// Variables
const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/my_db", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err) {
        console.log("DB connected")
    } else {
        console.log("DB not connected")
    }
})

const NewSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number
});

const newModel = new mongoose.model("Users", NewSchema);

// Write Data -> first method
const data = new newModel({
    name: 'Atif',
    password: 'admin',
    age: 32
})
data.save();


// Write data -> second method
const dataNew = async () => {
    const resultDataNew = await newModel.insertMany([{
        name: 'Kashif',
        passwrod: 'admin',
        age: '35'
    }]);
    console.log(resultDataNew);
}

dataNew();

//Port 5000
app.listen(5000, () => {
    console.log('Connection listen on 5000 Port')
});