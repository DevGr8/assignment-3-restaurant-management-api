const mongoose = require("mongoose");

const menuItemSchema = {
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
};

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
