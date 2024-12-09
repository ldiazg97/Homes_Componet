const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homes");
require("../schemas/homes.schema");

const homeController = require("../Controllers/homes");

router.get("/homes", homeController.getAllHomes);
router.get("/homes/:id", homeController.getHomeById);
router.post("/homes", homeController.createHome);
router.put("/homes/:id", homeController.updateHome);
router.delete("/homes/:id", homeController.deleteHome);

module.exports = router;
