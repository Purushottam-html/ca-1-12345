import mongoose from "mongoose";

const restaurantDetails = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    itemsArray: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'items',
        required: true,
    }]
},{timestamps: true})

const  restaurant = mongoose.model('restaurant' , restaurantDetails)