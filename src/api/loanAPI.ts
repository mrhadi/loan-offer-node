import calculateMonthlyPayment from '../logics'
import { LoanOfferType } from '../models';
import { Config } from '../utils/config'

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

    const loanOffers: Array<LoanOfferType> = []

    Config.lenders.map(lender => {
      loanOffers.push({
        monthlyRepayments: calculateMonthlyPayment(userData.vehiclePrice, lender.rate, userData.loanTerm),
        interestRate: lender.rate,
        fees: lender.fees,
        lender: lender.name
      })
    })

    res.status(200).send(loanOffers)
  }
)

module.exports = router
