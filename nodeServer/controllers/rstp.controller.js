const RstpUrls = require('../models/RstpUrls.model');
module.exports = {
    getUrls: async function (req, res) {
        // Create a new user
        console.log(req.body);
        try {
            const urls = await RstpUrls.getAll(req.user.email);
            const response = {ok:true,data:urls};
            res.status(201).send(response);
        } catch (error) {
            const response = {ok:false,data:error};
            res.status(400).send(response);
        }
    },
    addUrl: async function (req, res) {
        // Create a new user
        console.log(req.body);
        try {
            const rstpUrls = new RstpUrls({ url: req.body.url, email: req.user.email })
            const result = await rstpUrls.save();
            const response = {ok:true,data:result};
            res.status(201).send(response);

        } catch (error) {
            const response = {ok:false,data:error};
            res.status(400).send(response);
        }
    }
}


