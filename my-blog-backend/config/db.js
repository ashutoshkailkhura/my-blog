const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose
    .connect(uri, options)
    .then(() => console.log("Connected to MongoDB ..."))
    .catch((err) => console.error("Could not connect to MongoDB:‌", err));
};

module.exports = connectDB;
