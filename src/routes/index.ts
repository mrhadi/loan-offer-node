import { Router } from 'express'

import apiRouter from '../api'

const router = Router()

router.use((err, req, res, next) => {
  next()
})

router.get('/', (req, res, next) => {
  res.status(200).send('Server root')
})

router.use('/api', apiRouter)

export default router
