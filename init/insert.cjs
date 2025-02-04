const mongoose = require("mongoose");
const initData = require("./data.cjs");
const User = require("../models/users.cjs");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/users");
}

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await User.deleteMany({});
  await User.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
