require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./config/db");

const logger = require("./middleware/logger");
const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const menuRoutes = require("./routes/menuRoutes");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (request, response) => {
    response.json({
        message: "Welcome to Restaurant APIs"
    });
});

app.use("/", authRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/menu", menuRoutes);

app.use((request, response) => {
    response.status(404).json({ message: "Route not found" });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
