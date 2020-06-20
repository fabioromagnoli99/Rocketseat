const objeto = {
    nome: "Carlos",
    idade: 29,
    tecnologias: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
}

console.log(`O usuario ${objeto.nome} tem ${objeto.idade} e usa a tecnologia ${objeto.tecnologias[0].nome} com especialidade em ${objeto.tecnologias[0].especialidade}`)