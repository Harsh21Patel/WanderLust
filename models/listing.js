const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => (v) === "" ? "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    },
    price: Number,
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;