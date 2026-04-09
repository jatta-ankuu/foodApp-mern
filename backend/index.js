require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const URL =process.env.MONGO_URL;
const PORT=process.env.PORT;
const userRoutes = require("./Routes/userRoute");
const displayData = require("./Routes/displayData");
const cors = require("cors");
const { foodData, foodcat } = require("./Model/food");
const userModel = require("./Model/user");
const category = require("./foodCategory.json");
const foodItem = require("./foodData2.json");
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use("/routes" , userRoutes);
app.use("/routes", displayData);
app.listen(PORT,()=>{
    mongoose.connect(URL)
    .then(async () => {
    console.log("Mongo Connected");
   global.foodItem = await foodData.find({});
   global.foodCategory = await foodcat.find({});
   if(!global.foodItem || !global.foodCategory){
    throw console.error("The data will not be fetched");
   }

  //  console.log(JSON.stringify(global.foodItem, null, 2));
  //  console.log(global.foodCategory);
  // let finaldata = await foodData.create(foodItem);
   // await foodData.create(foodItem);
    // await foodcat.create(category);
  })
  .catch(err => {
    console.log(err);
  });
    
    console.log("port is listen"+PORT)

});