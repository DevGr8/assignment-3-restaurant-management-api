const MenuItem = require("../models/MenuItem");
const Restaurant = require("../models/Restaurant");

const getMenuForRestaurant = async (request, response) => {
    try {
        const restaurant = await Restaurant.findById(request.params.id);

        if (!restaurant) {
            return response.status(404).json({
                message: "Restaurant not found"
            });
        }

        const menuItems = await MenuItem.find({
            restaurantId: request.params.id
        });

        response.status(200).json(menuItems);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const addMenuItem = async (request, response) => {
    try {
        const { name, price, isAvailable } = request.body;

        if (!name || price === undefined) {
            return response.status(400).json({
                message: "name and price are required"
            });
        }

        const restaurant = await Restaurant.findById(request.params.id);

        if (!restaurant) {
            return response.status(404).json({
                message: "Restaurant not found"
            });
        }

        const newMenuItem = new MenuItem({
            restaurantId: request.params.id,
            name,
            price,
            isAvailable
        });

        const menuItem = await newMenuItem.save();

        response.status(201).json(menuItem);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const updateMenuItem = async (request, response) => {
    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(
            request.params.id,
            {
                name: request.body.name,
                price: request.body.price,
                isAvailable: request.body.isAvailable
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedMenuItem) {
            return response.status(404).json({
                message: "Menu item not found"
            });
        }

        response.status(200).json(updatedMenuItem);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const deleteMenuItem = async (request, response) => {
    try {
        const deletedMenuItem = await MenuItem.findByIdAndDelete(
            request.params.id
        );

        if (!deletedMenuItem) {
            return response.status(404).json({
                message: "Menu item not found"
            });
        }

        response.status(200).json({
            message: "Menu item deleted successfully"
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

module.exports = {
    getMenuForRestaurant,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
};
