const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  mobile: Number,
  gender: String,
  city: String,
});

const Users = mongoose.model("User", userSchema);
module.exports = Users;
