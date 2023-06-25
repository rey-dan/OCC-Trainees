const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://ian:1234@test.hcbdyj3.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true});

var connection = mongoose.connection;

connection.on("error", () => {
    console.log("MongoDB connection failed")
});

connection.on("connected", () => {
    console.log("MongoDB connected")
});

module.exports = mongoose;