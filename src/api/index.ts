const router = require('express').Router()

const loanAPI = require(`./loanAPI`)

router.use((err, req, res, next) => {
  next()
})

router.use(`/loan`, loanAPI)

module.exports = router
