const router = require('express').Router()
const { validationResult, matchedData, body } = require('express-validator')

router.post(
  '/',
  [
    body('firstName').isString(),
    body('lastName').isString(),
    body('email').isEmail(),
    body('employmentStatus').isIn(['employed', 'self-employed', 'unemployed']),
    body('employer').if(body('employmentStatus').exists().equals('employed')).isString(),
    body('vehiclePrice').isInt(),
    body('deposit').isInt(),
    body('loanPurpose').isString(),
    body('loanTerm').isIn([1, 2, 3, 4, 5, 6, 7])
  ],
  (req, res) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() })
    }

    const userData = matchedData(req, {
      includeOptionals: true
    })

    res.status(200).send(userData)
  }
)

module.exports = router
