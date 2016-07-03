const express = require('express')

const app = express()

app.get('/', (request, response) => {
	response.send('AutoDeploy test - hopefully this works!')
})

app.listen(8080, () => {
	console.log('Server listening on port 8080')
})
