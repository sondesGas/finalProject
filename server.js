const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
// Connect to Database
connectDB();
// Init midleware
app.use(express.json());
// Defines routes
app.use("/api/users", require("./routes/users"));
//...

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
