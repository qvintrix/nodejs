const parseCookies = require("../helpers/parse-cookies");

module.exports = (req, res, next) => {
  const parsedCookies = parseCookies(req);

  if (Object.keys(parsedCookies).length) {
    console.log(parseCookies(req));
  }

  next();
};
