const nome = "Fabio"
const sexo = "M"
const idade = 50
const contribuicao = 45

const calculoContribuicao = idade + contribuicao

// essas variaveis irao retornar true ou false

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeApsentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if( homemPodeAposentar || mulherPodeApsentar){
    console.log(`${nome}, voce pode se Aposentar!`)
} else {
    console.log(`${nome}, voce nao pode se Aposentar`)
}