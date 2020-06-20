// Construcao e impressao de objetos

const usuario = {
    nome: "Diego",
    empresa: { 
    nome:"Rocketseat",
    cor: "Roxo",
    Foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}
}    

console.log(`A empresa ${usuario.empresa.nome} esta localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)