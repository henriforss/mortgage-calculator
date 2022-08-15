
const calculateMortgage = () => {

  /* Get user input. */
  const percent = document.getElementById("percent")
  const amount = document.getElementById("amount")
  const time = document.getElementById("time")

  /* Show input values. Note: Only during development, delete this later. */
  const showPercent = document.getElementById("show-percent")
  showPercent.innerText = percent.value

  /* Get ouput fields. */
  const monthlyPayment = document.getElementById("monthly-payment")
  const totalInterest = document.getElementById("total-interest")
  const totalCost = document.getElementById("total-cost")

  /* Handle user events. */
  percent.oninput = () => {
    showPercent.innerText = percent.value
    calculateValues()
  }
  
  amount.oninput = () => {
    calculateValues()
  } 
  
  time.oninput = () => {
    calculateValues()
  }
  
  /* Calculate values. Formula taken from the internet. */
  const calculateValues = () => {

    /* Monthly payment. */
    const monthlyPercent = percent.value / 100 / 12
    const monthlyPercentPlusOne = monthlyPercent + 1
    const timeMonths = time.value * 12
    const raiseToNegative = Math.pow(monthlyPercentPlusOne, -timeMonths)
    const subtractFromOne = 1 - raiseToNegative
    const numberToMultiply = monthlyPercent / subtractFromOne
    const monthlyPaymentNumber = Math.round(numberToMultiply * amount.value)
    monthlyPayment.innerText = monthlyPaymentNumber

    /* Total amount. */
    let tempAmount = monthlyPaymentNumber * timeMonths
    totalCost.innerText = tempAmount

    /* Total interest. */
    const tempInterest = Math.round(tempAmount - amount.value)
    totalInterest.innerText = tempInterest
  }
}

calculateMortgage()
