const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Flower-Language-API", { useNewUrlParser: true });

module.exports.Flower = require("./flower");
