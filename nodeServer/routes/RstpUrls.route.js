const express = require('express');
const auth = require('../middlware/auth');
const RstpController = require('../controllers/rstp.controller');
const router = express.Router()

router.post('/rstpUrls', auth , async (req, res) => {
    RstpController.addUrl(req,res);
})

router.get('/rstpUrls', auth , async (req, res) => {
    RstpController.getUrls(req,res);
}) 
module.exports = router