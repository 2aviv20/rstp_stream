//https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122
const express = require('express');
const path = require('path');
const userRouter = require('./routers/user')

const app = express()
const port = 3888;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json())
app.use(express.static('public'))

app.use(userRouter)
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))