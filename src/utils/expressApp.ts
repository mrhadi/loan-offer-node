import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

import routes from '../routes'

const expressApp = () => {
    const app = express()

    app.set('views', './src/views')
    app.set('view engine', 'pug')
    app.use(express.static('public'))
    app.use(cors())
    app.use(express.json())
    app.use('/', routes)

    return app
}

export default expressApp
