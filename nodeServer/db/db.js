// const mongoose = require('mongoose')
// console.log(process.env.MONGODB_URL);
// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
// })

// mongoose.connection.on('connected', function(){
//     console.log("mongo connected")
// });


var mongoose = require('mongoose')
var mongoUrl = process.env.MONGODB_URL

var connectWithRetry = function() {
  return mongoose.connect(mongoUrl, function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      setTimeout(connectWithRetry, 10000);
    }
  });
};
connectWithRetry();