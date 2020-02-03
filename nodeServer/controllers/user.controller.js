const User = require('../models/User.model');

exports.addUser = async function (req, res) {
    // Create a new user
    try {
        const user = new User(req.body);
        await user.save()
        const token = await user.generateAuthToken()
        console.log(token);
        const response = {ok:true,data:{ user, token }};
        res.status(201).send(response);
    } catch (error) {
        const response = {ok:false,data:error};
        console.log(error);
        res.status(400).send(response);
    }
}

exports.login = async function (req, res) {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }
        const token = await user.generateAuthToken()
        const response = {ok:true,data:{ user, token }};
        res.status(201).send(response);
    } catch (error) {
        const response = {ok:false,data:error};
        res.status(400).send(response);
    }
}
exports.logOut = async function (req, res) {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        const response = {ok:true,data:{}};
        res.status(201).send(response);
    } catch (error) {
        const response = {ok:false,data:error};
        res.status(400).send(response);
    }
}


