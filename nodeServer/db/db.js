const mongoose = require('mongoose')
console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

mongoose.connection.on('connected', function(){
    console.log("mongo connected")
});
