const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"; // Replace with your actual database name

const connectToMongo =  async() => {
   await console.log("Connected to the Mongo Successfully")
};

module.exports = connectToMongo;
