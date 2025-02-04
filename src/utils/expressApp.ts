const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('../routes')

const genericErrors = require('./genericErrors')
const notFoundError = require('./notFoundError')

const expressApp = async () => {
    const app = express()

    app.set('views', './src/views')
    app.set('view engine', 'pug')
    app.use(express.static('public'))
    app.use(cors())
    app.use(bodyParser.json())
    app.use('/', routes)
    app.use(notFoundError)
    app.use(genericErrors)

    return app
}

module.exports = expressApp
