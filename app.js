var express = require('express')
var app = express()
var startNewGame = require('src/client/start-new-game')

var bodyParser = require('body-parser')

const port = 3000

app.get('/new', (req, res) =>
  startNewGame(req, res)
)

app.post('/move', (req, res) =>
  res.send('move')
)

app.get('/status', (req, res) =>
  res.send('status')
)

app.listen(port, () =>
  console.log("listening on port ", port)
)
