const router = require('express').Router()
const { API_VER } = require('../utils/config')

const loanAPI = require(`./${API_VER}/loanAPI`)

router.use(`/${API_VER}/user`, loanAPI)

module.exports = router
