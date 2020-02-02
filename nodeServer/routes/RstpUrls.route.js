const express = require('express');
const RstpUrls = require('../models/RstpUrls.model');
const auth = require('../middlware/auth');

const router = express.Router()

router.post('/rstpUrls', auth , async (req, res) => {
    // Create a new user
    console.log(req.body);
    try {
        const rstpUrls = new RstpUrls(req.body)
        const res = await rstpUrls.save()
        res.status(201).send(res)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/rstpUrls', auth , async (req, res) => {
    // Create a new user
    console.log(req.body);
    try {
        const urls = await RstpUrls.getAll();
        res.status(201).send(urls)
    } catch (error) {
        res.status(400).send(error)
    }
}) 

router.get('/rstpUrls/:email', auth , async (req, res) => {
    // Create a new user
    console.log(req.body);
    try {
        const urls = await RstpUrls.findByEmail(req.params.email);
        res.status(201).send(urls)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router