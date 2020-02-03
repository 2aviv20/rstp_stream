const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const rstpUrlSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },

})

rstpUrlSchema.methods.addNewUrl = async function() {
    const res = await this.save()
    return res;
}

rstpUrlSchema.statics.findByEmail = async (_email) => {
    const urls = await rstpUrl.find({email:_email} )
    return urls
}

rstpUrlSchema.statics.getAll = async (_email) => {
    const urls = await rstpUrl.find({})
    return urls
}

const rstpUrl = mongoose.model('RstpUrls', rstpUrlSchema)

module.exports = rstpUrl;