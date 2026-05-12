const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bustrips", require("./routes/tripRoutes"));
app.use("/api/places", require("./routes/placeRoutes"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});


// Server Start
app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});