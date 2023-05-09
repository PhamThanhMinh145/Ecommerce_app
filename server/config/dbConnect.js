const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnect = () => {
  try {
    mongoose.set('strictQuery', true);
    const conn = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connect");
  } catch (error) {
    console.log("Database error");
  }
};

module.exports = dbConnect;
