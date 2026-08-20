const mongoose = require("mongoose");

const restaurantSchema = {
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
};

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
