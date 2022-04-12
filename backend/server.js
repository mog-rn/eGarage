const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "https://e-garage.mogakadev.tech",
};

app.use(cors(corsOptions));

// Parse requests of Content-Type -> application/json
app.use(express.json());
app.use(bodyParser.json());

// Parse requests of Content-Type -> application/x-www-form-urlencoded
// app.use(express.urlencoded({ extend: true }));

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to eGarage's backend api" });
});

const PORT = process.env.PORT || 5050;

require("./routes/garage")(app);
require("./routes/user")(app);
// Setting the port to listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
