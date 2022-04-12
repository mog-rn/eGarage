const sql = require("./db");

// User Constructor
const User = function (user) {
  this.username = user.username;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.email = user.email;
  this.password = user.password;
};

// New user
User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Created user: , {id: res.insertId, ...newUser}");
    result(null, {id: res.insertId, ...newGarage})
  });
};
