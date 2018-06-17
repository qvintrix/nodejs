module.exports = {
	title: "user",
	description: "Properties required to get a user",
	type: "object",
	properties: {
		login: {
			type: "string",
			description: "login of the account user"
		},
		password: {
			type: "number",
			description: "password of the account user"
		}
	},
	required: [
		"login", "password"
	]
}