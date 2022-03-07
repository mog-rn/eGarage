module.exports = (app) => {
  const garages = require("../controllers/garage");
  var router = require("express").Router();

  // New garage route
  router.post("/", garages.create);
  // Get all garages
  router.get("/", garages.findAll);
  // Get a garage by {:id}
  router.get("/:id", garages.findOne);
  // Update a garage by {:id}
  router.put("/:id", garages.update);
  // Delete a garage by {:id}
  router.delete("/:id", garages.delete);
  // Delete all garages
  router.delete("/:id", garages.deleteAll);

  app.use("/api/garages", router);
};
