const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlowerSchema = new Schema ({
  name: String,
  scientificName: String,
  meaning: String,
  description: String,
  image: String,
  sources: [String],
  imageSource: String
});

const Flower = mongoose.model('Flower', FlowerSchema);

module.exports = Flower;