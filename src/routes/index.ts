const router = require('express').Router()
const apiRouter = require('../api')

router.use((err, req, res, next) => {
    next()
})

router.get('/', (req, res, next) => {
    res.status(200).send('Server root')
})

router.use('/api', apiRouter)

module.exports = router
