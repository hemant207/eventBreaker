const mongoose = require('mongoose');

//schema

const eventSchema = new mongoose.Schema({
    "name":String,
    "description":String,
    "date":String,
    "price":Number,
    "organiser_id": {type:mongoose.Schema.ObjectId , ref:'Admin'}
}) 

const organizerSchema = new mongoose.Schema({
    "username":String,
    "password":String
})


//model
const event = mongoose.model("Event",eventSchema);
const admin = mongoose.model("Admin",organizerSchema);

//exports models

module.exports = {
    event,
    admin
}