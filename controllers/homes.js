const Home = require("../models/homes");
const HomeType = require("../models/homeTypes");

// Obtener todos los  Homes

const getAllHomes = async (req, res) => {
  try {
    const homes = await Home.findAll({
      include: {
        model: HomeType,
        attributes: ["name"],
      },
    });
    res.status(200).json(homes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting homes", error: error.message });
  }
};

//Obtener un Homes  por ID
const getHomeById = async (req, res) => {
  const { id } = req.params;
  try {
    const home = await Home.findByPk(id, {
      include: {
        model: HomeType,
        attributes: ["name"],
      },
    });

    if (!home) {
      return res.status(404).json({ message: "Home not found" });
    }

    res.status(200).json(home);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting home", error: error.message });
  }
};

// Crear un Home
const createHome = async (req, res) => {
  const {
    name,
    address,
    home_type_id,
    residents,
    geo_location,
    timezone,
    status,
    image,
  } = req.body;

  try {
    const newHome = await Home.create({
      name,
      address,
      home_type_id,
      residents,
      geo_location,
      timezone,
      status,
      image,
    });

    res.status(201).json(newHome);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating home", error: error.message });
  }
};

//Update un Homes usando el ID
const updateHome = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    address,
    home_type_id,
    residents,
    geo_location,
    timezone,
    status,
    image,
  } = req.body;

  try {
    const home = await Home.findByPk(id);

    if (!home) {
      return res.status(404).json({ message: "Home not found" });
    }

    await home.update({
      name,
      address,
      home_type_id,
      residents,
      geo_location,
      timezone,
      status,
      image,
    });

    res.status(200).json(home);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating Home", error: error.message });
  }
};

//  Eliminar un Homes

const deleteHome = async (req, res) => {
  const { id } = req.params;

  try {
    const home = await Home.findByPk(id);

    if (!home) {
      return res.status(404).json({ message: "Home not found" });
    }

    await home.destroy();
    res.status(200).json({ message: "Home successfully removed" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting Home", error: error.message });
  }
};

module.exports = {
  getAllHomes,
  getHomeById,
  createHome,
  updateHome,
  deleteHome,
};
