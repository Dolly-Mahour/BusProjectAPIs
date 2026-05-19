const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bustrips", require("./routes/tripRoutes"));
app.use("/api/places", require("./routes/placeRoutes"));

// Root test route 
app.get("/", (req, res) => {
    res.send("API is running...");
});

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB Connection Error:", err);
});