import { Response, NextFunction } from 'express'

const router = require('express').Router()
const apiRouter = require('../api')

router.use((next: NextFunction) => {
    next()
})

router.get('/', (res: Response) => {
    res.status(200).send('Server root')
})

router.use('/api', apiRouter)

module.exports = router
