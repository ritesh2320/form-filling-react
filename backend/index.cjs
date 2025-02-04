const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect("mongodb://localhost:27017/users");
}

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/postData", (req, res));

app.get("/getData", (req, res) => {
  res.send("hello");
});

app.listen(8080, () => {
  console.log("server listening the port 8080");
});
