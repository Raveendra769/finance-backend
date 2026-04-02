const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

module.exports = app;
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);
const auth = require("./middleware/auth");

app.get("/api/test", auth, (req, res) => {
  res.json({ msg: "Protected route working", user: req.user });
});
const recordRoutes = require("./routes/recordRoutes");

app.use("/api/records", recordRoutes);
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);