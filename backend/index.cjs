const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const User = require("../models/users.cjs");

main()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/users");
}

app.post("/postData", async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    let newUser = new User(data);
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.send("root user");
});

app.listen(8080, () => {
  console.log("server listening the port 8080");
});
