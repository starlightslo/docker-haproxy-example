'use strict'

const express = require('express')
const PORT = 5555

const app = express()
app.get('/', (req, res, next) => {
	console.log('Handling the request.')
	res.send('Hello world.')
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)

