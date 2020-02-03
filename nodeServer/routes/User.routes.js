const express = require('express');
const auth = require('../middlware/auth');
const UserController = require('../controllers/user.controller');
const router = express.Router()

router.post('/users', (req, res) => {
    UserController.addUser(req, res);
});

router.post('/users/login', async(req, res) => {
    UserController.login(req, res);
})

router.get('/users/me', auth, async(req, res) => {
    res.send(req.user)
})

router.post('/users/me/logout', auth, async (req, res) => {
    UserController.logOut(req, res);
})

module.exports = router