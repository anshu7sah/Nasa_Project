const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
require("dotenv").config();

mongoose.connection.once("open", () => {
  console.log("MongoDB Connection is ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};