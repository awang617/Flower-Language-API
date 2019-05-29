const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlowerSchema = new Schema ({
  name: String,
  scientificName: String,
  meaning: String,
  description: String,
  sources: String,
  image: String
});

const Flower = mongoose.model('Movie', FlowerSchema);

module.exports = Flower;