const inputAmount = document.querySelector('#amount')
const inputPorcentage = document.querySelector('#porcentage')
const btnPorcetaje = document.querySelector('.btn-porcentage')

const fiveCoupon = document.querySelector('#five')
const fifteenCoupon = document.querySelector('#fifteen')
const thirtyCoupon = document.querySelector('#thirty')
const sixtyCoupon = document.querySelector('#sixty')
const coupons = document.querySelector('.coupons')
const showCoupons = document.querySelector('.show-coupons')

export const showMessageElements = (msg) => {
  const textContainer = document.querySelector('.container-total-quantity')
  const amountText = document.querySelector('.total-quantity')

  amountText.innerText = msg
  amountText.style.display = 'flex'
  textContainer.style.display = 'block'
}

export const calculatePorcentage = (amount, porcentage) => {
  const textContainer = document.querySelector('.container-total-quantity')
  const amountText = document.querySelector('.total-quantity')

  if (!amount || !porcentage) {
    amountText.innerText = 'Lo siento por favor llena los datos solicitados'
    amountText.style.display = 'flex'
    textContainer.style.display = 'block'
    return
  }

  if (porcentage > 100) {
    amountText.innerText = 'No puedes ingresar mas del 100% de porcentaje'
    amountText.style.display = 'flex'
    textContainer.style.display = 'block'
    return
  }

  const newAmount = amount * (100 - porcentage) / 100
  showMessageElements(`Se aplico el porcentaje del ${porcentage}% y la cantidad total es ${newAmount}`)
}

document.addEventListener('DOMContentLoaded', () => {
  btnPorcetaje.addEventListener('click', () => {
    const amount = Number(inputAmount.value)
    const porcentage = Number(inputPorcentage.value)
    calculatePorcentage(amount, porcentage)
  })

  showCoupons.addEventListener('click', () => {
    coupons.style.display = 'flex'
    inputPorcentage.style.display = 'none'
  })

  fiveCoupon.addEventListener('click', () => {
    const amount = Number(inputAmount.value)
    calculatePorcentage(amount, 5)
  })

  fifteenCoupon.addEventListener('click', () => {
    const amount = Number(inputAmount.value)
    calculatePorcentage(amount, 15)
  })

  thirtyCoupon.addEventListener('click', () => {
    const amount = Number(inputAmount.value)
    calculatePorcentage(amount, 30)
  })

  sixtyCoupon.addEventListener('click', () => {
    const amount = Number(inputAmount.value)
    calculatePorcentage(amount, 60)
  })
})
