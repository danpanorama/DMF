import Joi from 'joi';

export const meetingSchema = Joi.object({
  subject: Joi.string().trim().min(2).max(200).required(),
  date: Joi.date().iso().greater('now').required(),
  location: Joi.string().trim().max(200).optional()
});
