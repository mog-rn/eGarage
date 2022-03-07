const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// Parse requests of Content-Type -> application/json
app.use(express.json());

// Parse requests of Content-Type -> application/x-www-form-urlencoded
// app.use(express.urlencoded({ extend: true }));

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to eGarage's backend api" });
});

const PORT = process.env.PORT || 5050;

require("./routes/garage")(app);

// Setting the port to listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
