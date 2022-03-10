const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb://localhost/5000`,
    {
      useNewUrlParser: true,
     
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
