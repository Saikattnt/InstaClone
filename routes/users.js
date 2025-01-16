const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://saikatojha0:rCLiprQHnJTQn9dH@insta-db.mk649.mongodb.net/?retryWrites=true&w=majority&appName=insta-db"); //connecting it to the database

const userSchema = mongoose.Schema({  //details saving in database, things user contains like username,password,images etc..
  username: String,
  name: String,
  email: String,
  password: String,
  picture: {
    type: String,     //String is used beacuse we are not stroing images we are passing url only for the image
    default: "def.png"
  },
  contact: String,
  bio: String,
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,      //stroes the id of the posts rather than the posts of users
      ref: "story" 
    }
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" 
    }
  ],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post" 
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    } 
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    }
  ]
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema); // by this line we can create,read,update,delete data form database 
