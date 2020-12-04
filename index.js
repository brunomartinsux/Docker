const express = require('express')

const app = express()

app.get("/", (req, res) => {
	console.log("Deu boa")
	res.send("Deu boa DNV")
})

app.listen(3003, console.log("http://localhost:3003 on fire"))
