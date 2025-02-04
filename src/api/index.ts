import { Router } from 'express'
import loanAPI from './loanAPI'

const router = Router()

router.use((err, req, res, next) => {
  next()
})

router.use(`/loan`, loanAPI)

export default router
