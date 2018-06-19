const Ajv = require("ajv");
const ajv = Ajv({ 
	allErrors: true,
	 removeAdditional: "all" 
	});
const userSchema = require("./user.schema");
ajv.addSchema(userSchema, "existing-user");

const errorResponse = () => {
  return {
    status: "failed",
    error: "credentials do not much"
  };
};

module.exports = schemaName => {
  return (req, res, next) => {
    const isValid = ajv.validate(schemaName, req.body);

    if (!isValid) {
      res.status(400).json(errorResponse());
    } else {
      next();
    }
  };
};
