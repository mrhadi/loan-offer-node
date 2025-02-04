export type LenderType = {
  name: string,
  fees: string,
  rate: number
}

export type LoanOfferType = {
  monthlyRepayments: number,
  interestRate: number,
  fees: string
  lender: string
}
