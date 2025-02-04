const router = require('express').Router()
const { API_VER } = require('../utils/config')

const loanAPI = require(`./loanAPI`)
const userAPI = require(`./userAPI`)

router.use((err, req, res, next) => {
  next()
})

router.use(`/${API_VER}/loan`, loanAPI)
router.use(`/user`, userAPI)

module.exports = router
