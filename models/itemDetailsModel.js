import mongoose from "mongoose";

const itemDetails = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    }
},{timestamps: true})

const item = mongoose.model('item' , itemDetails)