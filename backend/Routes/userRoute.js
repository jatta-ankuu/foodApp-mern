const express = require("express")
const router = express.Router();
const userModel =require("../Model/user");
const {checked , validation} = require("../Middleware/validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const token = process.env.JSONWEBSECRET;

router.post("/login", async (req,res)=>{
    let { username:name, password}= req.body;
    if(!name || !password){
        return res.status(404).json({"message":"Please enter the write details"})
    }
    try{
        let data = await userModel.findOne({name});
        if(!data){
            return res.status(400).json({"message":"This user is not rejistered"});
        }
        const matched =await bcrypt.compare(password, data.password);
         if(!matched){
           return res.status(400).json({"message":"INCORRECT PASSWORD"});
        }
        else{
     const DATA = {
    user:{
        id:data.id
    }
   };
   const authToken = jwt.sign(DATA,token);
            res.status(200).json({"message":"Welcome user" ,user:data ,authToken});
        }
    }catch(e){
        console.log("The data will not catch at login"+e);
    }
});

router.post("/create",checked,validation, async(req,res)=>{
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    try{
        let foundUser = await userModel.findOne({name:req.body.name});
        if(foundUser){
            return res.status(400).json({"message":"OOPS..!,User Already rejistered"});
        }

   let userData=  await userModel.create({
    name:req.body.name,
    email:req.body.email,
    location:req.body.location,
    password:hashPassword
   });

 
    res.json({message:"Success ,You rejistered successfully",userData});
} 
catch(e){
    console.log(e.message)
     res.status(400).json({ message: e.message });
}

});
module.exports= router;