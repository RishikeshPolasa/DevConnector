const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect to Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API is running");
});

//Define Routes
app.use("/api/users", require("./Routes/api/users"));
app.use("/api/posts", require("./Routes/api/posts"));
app.use("/api/profile", require("./Routes/api/profile"));
app.use("/api/auth", require("./Routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
