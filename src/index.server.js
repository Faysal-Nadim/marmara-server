const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv");

const app = express();

env.config();

const utilsRoute = require("./routes/utils");

//Database Initialization
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@marmaragold.cywjo.mongodb.net/?retryWrites=true&w=majority&appName=MarmaraGold`,
    { dbName: "MarmaraGold" }
  )
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log("Unable to connect" + err);
  });

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use("/api/v1", utilsRoute);

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on PORT ${process.env.PORT}`);
// });

module.exports = app;
