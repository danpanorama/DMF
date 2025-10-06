export default (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) {
    const msg = error.details.map(d => d.message).join(', ');
    return res.status(400).json({ status: 'fail', message: msg });
  }
  req.body = value;
  next();
};
