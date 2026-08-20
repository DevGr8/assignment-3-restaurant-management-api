const express = require("express");
const auth = require("../middleware/auth");
const {
    getRestaurants,
    getTopRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
} = require("../controllers/restaurantController");
const {
    getMenuForRestaurant,
    addMenuItem
} = require("../controllers/menuController");

const router = express.Router();

router.get("/top", getTopRestaurants);

router.get("/", getRestaurants);
router.get("/:id", getRestaurantById);
router.post("/", auth, createRestaurant);
router.put("/:id", auth, updateRestaurant);
router.delete("/:id", auth, deleteRestaurant);

router.get("/:id/menu", getMenuForRestaurant);
router.post("/:id/menu", auth, addMenuItem);

module.exports = router;
