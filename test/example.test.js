
import { calculatePorcentage, showMessageElements } from '../index'

describe('Calculo de porcentajes', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="container-total-quantity">
            <p class="total-quantity"></p>
        </div>
        `
  })

  test('Deberia mostrar mensaje de que se necesitan una cantidad y un porcentaje', () => {
    const el = document.querySelector('.total-quantity')

    expect(el.innerText).toBeUndefined()

    calculatePorcentage(null, null)

    expect(el.innerText).toBe('Lo siento por favor llena los datos solicitados')
    expect(el.style._values).toEqual({ display: 'flex' })
  })

  test('Deberia solo ingresar como maximo el 100% de una cantidad', () => {
    const el = document.querySelector('.total-quantity')

    calculatePorcentage(100, 200)

    expect(el.innerText).toBe('No puedes ingresar mas del 100% de porcentaje')
  })

  test('Deberia hacer el calculo de la cantidad 100 con 30%', () => {
    const el = document.querySelector('.total-quantity')

    calculatePorcentage(100, 30)

    expect(el.innerText).toBe('Se aplico el porcentaje del 30% y la cantidad total es 70')
  })
})

describe('Verificar mensaje mostrado', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="container-total-quantity">
            <p class="total-quantity"></p>
        </div>
        `
  })

  test('Deberia de agregar un mensaje', () => {
    const textContainer = document.querySelector('.container-total-quantity')
    const amountText = document.querySelector('.total-quantity')

    showMessageElements('msg')

    expect(amountText.innerText).toBe('msg')
    expect(textContainer.style._values).toEqual({ display: 'block' })
  })
})
