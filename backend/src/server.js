const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config/config')
const routes = require('./routes')

const server = express()

mongoose.connect(
    config.module.connectionDB.url,
    config.module.connectionDB.configs
)

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)