// import Joi from 'joi';

// export const meetingSchema = Joi.object({
//   subject: Joi.string().trim().min(2).max(200).required(),
//   date: Joi.date().iso().greater('now').required(),
//   location: Joi.string().trim().max(200).optional()
// });


// validators/meetingValidator.js
import Joi from "joi";

export const meetingSchema = Joi.object({
  productId: Joi.string().optional(),
  date: Joi.string().isoDate().required(),
  time: Joi.string().required(),
  contact: Joi.object({
    name: Joi.string().allow(""),
    email: Joi.string().email().allow(""),
    phone: Joi.string().allow("")
  }).optional()
});
