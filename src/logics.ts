const calculateMonthlyPayment = (loanAmount: number, interestRate: number, loanTerm: number): number => {
  const monthlyInterestRate = interestRate / 12 / 100 // Convert annual rate to monthly and percentage to decimal
  const numberOfPayments = loanTerm * 12              // Convert term in years to number of monthly payments

  const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))

  return monthlyPayment
}
export default calculateMonthlyPayment
