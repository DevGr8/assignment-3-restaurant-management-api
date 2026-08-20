const Restaurant = require("../models/Restaurant");

const getRestaurants = async (request, response) => {
    try {
        const restaurants = await Restaurant.find({});
        response.status(200).json(restaurants);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const getTopRestaurants = async (request, response) => {
    try {
        const topRestaurants = await Restaurant.find({})
            .sort({ rating: -1 })
            .limit(5);

        response.status(200).json(topRestaurants);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const getRestaurantById = async (request, response) => {
    try {
        const restaurant = await Restaurant.findById(request.params.id);

        if (!restaurant) {
            return response.status(404).json({
                message: "Restaurant not found"
            });
        }

        response.status(200).json(restaurant);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const createRestaurant = async (request, response) => {
    try {
        const { name, city, address, cuisine, rating } = request.body;

        if (!name || !city || !address || !cuisine) {
            return response.status(400).json({
                message: "name, city, address and cuisine are required"
            });
        }

        const newRestaurant = new Restaurant({
            name,
            city,
            address,
            cuisine,
            rating
        });

        const restaurant = await newRestaurant.save();

        response.status(201).json(restaurant);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const updateRestaurant = async (request, response) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
            request.params.id,
            {
                name: request.body.name,
                city: request.body.city,
                address: request.body.address,
                cuisine: request.body.cuisine,
                rating: request.body.rating
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedRestaurant) {
            return response.status(404).json({
                message: "Restaurant not found"
            });
        }

        response.status(200).json(updatedRestaurant);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const deleteRestaurant = async (request, response) => {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(
            request.params.id
        );

        if (!deletedRestaurant) {
            return response.status(404).json({
                message: "Restaurant not found"
            });
        }

        response.status(200).json({
            message: "Restaurant deleted successfully"
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

module.exports = {
    getRestaurants,
    getTopRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
};
