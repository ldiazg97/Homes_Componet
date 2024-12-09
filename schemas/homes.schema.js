const Joi = require("joi");

const homeSchema = Joi.object({
  name: Joi.string().optional().allow(null, ""),
  address: Joi.string().required(),
  home_type_id: Joi.number().integer().required(),
  residents: Joi.number().integer().min(1).optional().default(1),
  geo_location: Joi.string().optional().allow(null, ""),
  timezone: Joi.string().optional().allow(null, ""),
  status: Joi.string().valid("Activa", "Inactiva").optional().default("Activa"),
  image: Joi.string().uri().optional().allow(null, ""),
});

module.exports = { homeSchema };
