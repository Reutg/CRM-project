let data = require('./src/data.json')
const Client = require('./server/models/Client')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/crmDB', { useNewUrlParser: true })

Client.insertMany(data)
