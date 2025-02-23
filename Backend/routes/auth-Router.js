const express = require("express")
const router = express.Router();
const userModel = require("../models/user-model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// route to handle create users 
router.post("/register", async (req, res)=>{
  const {name, email, password} = req.body

  const existUser = await userModel.findOne({email})

// check is user exist
  if (existUser) {
    return res.status(409).json({message: "User already exist"})
  }

// if user not exist create new user
  bcrypt.hash(password, 10, async (err, hash)=>{
    if(err){
      return console.log(err.message)
    }
    const newUser = await userModel.create({
    name,
    email,
    password: hash,
  })
    const token = jwt.sign({id: newUser._id, email: newUser.email}, process.env.JWT_SECRET)
      res.status(201).json({message: "User created successfully", token})
    console.log(token)
  })
})

// handler for user login
router.post("/login", async (req, res)=>{
  const {email, password} = req.body;
  const user = await userModel.findOne({email})

  if (!user) {
    return res.status(404).json({msg: "Invalid credentials"})
  }

  bcrypt.compare(password, user.password, (err, result)=>{
    if (err) {
      return res.status(406).json(err.msg)
    }
    if(result){
      const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET)
      res.status(200).json({message: "Login success", token})
    } else {
      return res.status(501).json({msg: "Invalid credentials"})
    }
  })
});

// check user is already loggedin
router.post("/verify", (req, res)=>{
  const token = req.body.token;

  if(!token){
    return res.status(401).json({message: "Token not found, Please login"})
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (error, decode)=>{
    if(error){
      return res.status(400).json(error.message)
    }
    
    if(decode){
      return res.status(200).json({msg: "User LoggedIn"})
    }
    
  })
})

module.exports = router;