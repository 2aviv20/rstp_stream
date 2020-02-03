const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//static folder
app.use(express.static(path.join(__dirname, "/build")));
//routes
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/build/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))