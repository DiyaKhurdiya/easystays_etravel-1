const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

// Route imports
const room = require("./routes/roomRoute");
const user = require("./routes/userRoute");
const booking = require("./routes/bookingRoute");

app.use("/api/v1", room);
app.use("/api/v1", user);
app.use("/api/v1", booking);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
