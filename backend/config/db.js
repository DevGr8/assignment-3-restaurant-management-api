const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Database connected successfully");
});

db.on("error", (error) => {
    console.log("Database connection error:", error);
});

db.on("disconnected", () => {
    console.log("Database disconnected");
});

module.exports = db;
