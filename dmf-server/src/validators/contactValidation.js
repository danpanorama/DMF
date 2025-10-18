import Joi from "joi";

export const contactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().allow("").optional(),
  message: Joi.string().trim().min(5).required(),
});
