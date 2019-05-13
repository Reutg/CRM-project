const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
name: String,
email: String,
firstContact: String,
email: String,
sold: Boolean,
owner: String,
country: String
})

const client = mongoose.model('client', clientSchema)

module.exports = client