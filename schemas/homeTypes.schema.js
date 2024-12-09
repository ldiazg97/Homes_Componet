const Joi = require("joi");

const homeTypeSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { homeTypeSchema };
