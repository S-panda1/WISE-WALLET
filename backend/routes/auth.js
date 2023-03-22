const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "hi$hi$hi";

//Route 1 : Create a user using: POST "/api/auth/createuser". No lgoin required
router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({ min: 5 }),
],async(req,res)=>{
    // if there are errors then send bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether a user with this email already exists
    try {
        let user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(400).json({error: "A user with this email already exists!"});
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
     user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
    //   .then(user => res.json(user))
    //   .catch(err =>{console.log(err)
    // res.json({error: 'Enter a unique email address'})});
    const data = {
        user:{
            id: user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    res.json(authtoken)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})

//Route 2 : Authenticate a user using: POST "/api/auth/login". No lgoin required
router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],async(req,res)=>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            success = false;
            return res.status(400).json({ errors: "Please try to login with correct credentials." });
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials." });
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success = true;
        res.json({success, authtoken})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
//Route 3 : Get loggedin user details: POST "/api/auth/getuser". Lgoin required
router.post('/getuser',fetchuser,async(req,res)=>{
    try {
        let userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
