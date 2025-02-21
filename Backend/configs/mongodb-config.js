const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
  console.log("Connectd to Database")
})
.catch((err)=>{
  console.error(err.message)
})

module.exports = mongoose;
