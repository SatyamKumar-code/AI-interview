const dns = require("dns");
const mongoose = require("mongoose");

dns.setServers(["1.1.1.1", "8.8.8.8"]);


async function connectToDB() {
    try {
        const mongoUrl = process.env.MONGO_URL;

        if (!mongoUrl) {
            throw new Error("Missing MongoDB connection string. Set MONGO_URL in .env.");
        }

        await mongoose.connect(mongoUrl, {
            serverSelectionTimeoutMS: 10000,
        })
        console.log("Connected to Database");
    } catch (err) {
        console.error("Error connecting to Database:", err);
    }
}

module.exports = connectToDB;