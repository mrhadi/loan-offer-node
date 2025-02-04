const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('../routes')

const expressApp = async () => {
    const app = express()

    app.set('views', './src/views')
    app.set('view engine', 'pug')
    app.use(express.static('public'))
    app.use(cors())
    app.use(bodyParser.json())
    app.use('/', routes)

    return app
}

module.exports = expressApp
