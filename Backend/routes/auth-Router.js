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

module.exports = router;