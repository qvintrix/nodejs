const url = require("url");

module.exports = (req, res, next) => {
  const urlParts = url.parse(req.url, true);
  const { query } = urlParts;

  if (Object.keys(query).length) {
    console.log("Query parsing:", query);
  }

  next();
};
