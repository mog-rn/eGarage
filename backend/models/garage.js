const sql = require("./db");

// Garage Constructor
const Garage = function (garage) {
  this.garage_name = garage.garage_name;
  this.services_offered = garage.services_offered;
  this.location = garage.location;
  this.phone = garage.phone;
  this.time_open = garage.time_open;
  this.time_closed = garage.time_closed;
};

// New Garage
Garage.create = (newGarage, result) => {
  sql.query("INSERT INTO garages SET ?", newGarage, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Created garage: ", { id: res.insertId, ...newGarage });
    result(null, { id: res.insertId, ...newGarage });
  });
};

// Find a garage by {id}
Garage.findById = (garage_id, result) => {
  sql.query(`SELECT * FROM garages WHERE garage_id = ${garage_id}`, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Found garage: ", res[0]);
      result(null, res[0]);
      return;
    }
    // If garage is not found
    result({ kind: "not_found" }, null);
  });
};

// Get all garages
Garage.getAll = (garage_name, result) => {
  let query = "SELECT * FROM garages";
  if (garage_name) {
    query += `WHERE garage_name LIKE '%{garage_name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    console.log("Garages:", res);
    result(null, res);
  });
};

// update a garage by {id}
Garage.updateById = (garage_id, garage, result) => {
  sql.query(
    "UPDATE garages SET garage_name = ?, services_offered = ?, location = ?, phone = ?, time_open = ?, time_closed = ? WHERE garage_id = ?",
    [
      garage.garage_name,
      garage.services_offered,
      garage.location,
      garage.phone,
      garage.time_open,
      garage.time_closed,
      garage_id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // Not found the garage with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Updated garage: ", { id: garage_id, ...garage });
      result(null, { id: garage_id, ...garage });
    }
  );
};

// Delete a garage by {:id}
Garage.remove = (garage_id, result) => {
  sql.query(
    "DELETE FROM garages WHERE garage_id = ?",
    garage_id,
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        //   Not found the garage with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Deleted garage with garage_id: ", garage_id);
      result(null, res);
    }
  );
};

// Delete all garages
Garage.removeAll = (result) => {
  sql.query("DELETE FROM garages", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} garages...`);
    result(null, err);
  });
};

module.exports = Garage;
