module.exports = request => {
  const list = {},
    rc = request.headers.cookie;

  rc &&
    rc.split(";").forEach(cookie => {
      const parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
    });

  return list;
};
