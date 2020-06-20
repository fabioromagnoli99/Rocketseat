// Calulo IMC

const nome = 'Carlos'
const peso = 84
const altura = 1.88

const imc = peso / (altura * altura)


if (imc >= 30) {
    console.log(`${nome}, seu IMC= ${imc.toFixed(2)} esta acima do peso. `)
} else {
    console.log(`${nome}, seu IMC= ${imc.toFixed(2)} nao esta acima do peso.`)
}
