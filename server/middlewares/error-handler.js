module.exports = (err, req, res, next) => {
  console.error(err.message);

  res.status(500);
  res.json({ error: err.message });
};
