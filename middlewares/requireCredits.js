module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    res.status(402).send({ error: 'Please get more credits' });
  }

  next();
};
