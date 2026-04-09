const express = require("express");
const router = express.Router();

router.post("/getData", (req,res)=>{
   try{
    res.send([global.foodItem , global.foodCategory])
      }
   catch(err){
    console.error(err.message);
    res.send(err);
   }
});

module.exports = router;