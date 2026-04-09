const { body, validationResult } = require('express-validator');

const checked = [
        body("email").notEmpty().isEmail().withMessage("Enter the correct Email"),
        body("password").notEmpty().isLength({min:6}).withMessage("Password must be contain 6 letter"),
        body("name").notEmpty(),
];
const validation = ((req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json
        ({errors: error.array()}
        );
    }
    next();
});
module.exports={checked, validation};