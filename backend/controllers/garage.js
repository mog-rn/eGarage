const Garage = require("../models/garage");

// Create and save a new garage
exports.create = (req, res) => {
  // Validate the request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
  }

  // Create a garage
  const garage = new Garage({
    garage_name: req.body.garage_name,
    services_offered: req.body.services_offered,
    location: req.body.location,
    phone: req.body.phone,
    time_open: req.body.time_open,
    time_closed: req.body.time_closed,
  });

  //   Save the garage
  Garage.create(garage, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating a garage!",
      });
    else res.send(data);
  });
};

// Retrieve all Garages from the database
exports.findAll = (req, res) => {
  const garage_name = req.query.garage_name;
  Garage.getAll(garage_name, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Garages",
      });
    else res.send(data);
  });
};

// Find a single garage with :id
exports.findOne = (req, res) => {
  Garage.findById(req.params.garage_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found the garage with id ${req.params.garage_id}`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Garage with id " + req.params.garage_id,
        });
      }
    } else res.send(data);
  });
};

// Update a garage identified by the {:id} in the request
exports.update = (req, res) => {
  // validate the request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
  }
  console.log(req.body);
  Garage.updateById(req.params.id, new Garage(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Garage with id ${req.params.garage_id}`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Garage with id " + req.params.garage_id,
        });
      }
    } else res.send(data);
  });
};

// Delete a garage by {:id} in the request
exports.delete = (req, res) => {
  Garage.remove(req.params.garage_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Garage with id ` + req.params.garage_id,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Garage with id " + req.params.garage_id,
        });
      }
    } else res.send({ message: `Tutorial was deleted successfully` });
  });
};

// Delete all the garages
exports.deleteAll = (req, res) => {
  Garage.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all garages...",
      });
    else res.send({ message: `All Garages were deleted successfully...` });
  });
};
