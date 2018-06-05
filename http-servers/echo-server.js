const http = require("http");

const port = process.env.PORT || 8080;
const server = http.createServer()

	.on("request", (req, res) => {
		req.on('data', (chunk) => {
			console.log(chunk);
			res.write(chunk);
		});
		req.on("end", () => {
			res.end();
		});
	})

	.listen(port, () => {
		console.log(`App listening on port ${port}!`)
	});