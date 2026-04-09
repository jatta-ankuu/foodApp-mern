const mongoose = require("mongoose");
const category = require("../foodCategory.json");
const foodSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  options: [
  {
    type: Map,
    of: String
  }
],
  description: {
    type: String,
    required: true
  }
});
const categoryfood = new mongoose.Schema({
  CategoryName:{
    type:String,
    required: true
  }
})

const foodData = new mongoose.model("FoodData",foodSchema);
const foodcat = new mongoose.model("Foodcat", categoryfood);

module.exports = { foodData, foodcat };