const express = require('express')
const request = require('request')
const router = express.Router()
const Client = require('../models/Client')

module.exports = router

router.get('/clients', async (req, res) => {
    const clients = await Client.find({})
    res.send(clients)
})

router.post('/clients', (req, res) => {
    let body = req.body

    let client = new Client(body)

    client.save()
    res.send(client)
})

