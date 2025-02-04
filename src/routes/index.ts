const router = require('express').Router()
const apiRouter = require('../api')

router.use((next) => {
    next()
})

router.get('/', (res) => {
    res.status(200).send('Server root')
})

router.use('/api', apiRouter)

module.exports = router
