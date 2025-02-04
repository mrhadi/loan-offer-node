import { LenderType } from '../models'

const env = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 8282

const lenders: Array<LenderType> = [
  {
    name: 'Lender A',
    rate: 5.5,
    fees: '$10 processing fee'
  },
  {
    name: 'Lender B',
    rate: 5.0,
    fees: '$15 processing fee'
  },
  {
    name: 'Lender C',
    rate: 6.0,
    fees: 'No fees'
  }
]

export const Config = {
  PORT,
  env,
  lenders
}
