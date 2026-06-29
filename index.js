const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("🚀 Node.js CI/CD Demo App is Running Successfully!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Healthy",
        message: "Application is running",
        timestamp: new Date()
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
