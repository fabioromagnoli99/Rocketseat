// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, 
// enquanto a mulher precisa ter no mínimo 85 anos na soma;


const nome = "Fabio"
const sexo = "M"
const idade = 50
const contribuicao = 46

const calculoContribuicao = idade + contribuicao

// essas variaveis irao retornar true ou false

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeApsentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if( homemPodeAposentar || mulherPodeApsentar){
    console.log(`${nome}, voce pode se Aposentar!`)
} else {
    console.log(`${nome}, voce nao pode se Aposentar`)
}
