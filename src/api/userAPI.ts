const router = require('express').Router()
const { check, validationResult, matchedData } = require('express-validator')

router.post(
  '/',
  [
    check('firstName').isString(),
    check('lastName').isString(),
    check('email').isEmail(),
    check('employmentStatus').not().isEmpty(),
    check('employer').optional({ nullable: true }),
  ],
  (req, res) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() })
    }

    const userData = matchedData(req, {
      includeOptionals: true
    })

    res.status(200).send('Ok')
  }
)

module.exports = router
