/* CASO PRECISE EXECUTAR É SO APAGAR A PRIMEIRA BARRA COM ASTERISCO 

//função é um bloco de codigo com instruções que vai executar determinado objetivo quando você chamar ele
//DECLARANDO FUNÇÃO

function retornarNomeCompleto(){
    let nome = "Hudson"
    let sobreNome = "Carolino"
    let idade = 25
    let profissao = "Desenvolvedor"

    console.log(`Meu nome é ${nome}`)
    console.log(`Meu Sobrenome é ${sobreNome}`)
    console.log(`Minha idade é ${idade}`)
    console.log(`Minha profissao é ${profissao}`)
}
//CHAMANDO FUNÇÃO
//vantagens da função = Codes mais limpos e reaproveitamentos de codigo
retornarNomeCompleto()

function soma(numero1, numero2){//receber parametros
    return numero1 + numero2
}
var xoxo = soma(3,5)//conseguimos passar para as funções argumentos
console.log(xoxo)
//passar 2 argumentos separados por virgula e logo recebe
//some 2 numeros pra mim, os numeros no parenteses, vai la, passa os parametros por numeros e executa minha instrução retornando seu valor
//recebe o retorno na chamada da fução

//Estrutura de repetição
//ARRAY = COLEÇÃO DE DADOS, LISTA COM VARIOS DADOS SEPARADOS

let listaNomes = ["Hudson","Maria","Wallace","Aline","Pedro"]
let Numeros = [1,32,435,64,34,45]
//console.log(listaNomes[2])

listaNomes.push("Jardel")//adiciona um novo valor no final

//lenght = quantos dados ou valores tem dentro do array
//agora se quiser especificar qual voce quer escolher voce coloca a posição dentro de parenteses listaNomes[1] --> acessar de forma individual
//além de que tem como mudar dentro do proprio vetor (listaNomes[2] = joao)

//mas aí caso você queira colocar o telefone do Hudson, empresa que ele trabalha, no que atua mas tambem tem a maria entao fica uma bagunça no array

let Devs = ["Hudson", "00-0000","kenzie Academy","Maria"] // --> MUITO DESORGANIZADO E LIMITADO
//Para resolver isso usamos um objeto chamado objeto

const Hudson = {
    nome: "Hudson",
    telefone: 0000000,
    empresa: "Kenzie Academy",
    Email: "exemplo@gmail.com"

}//no objeto ao inves de indice ou posições, utilizamos uma chave que conseguimos associar a algum valor
//associamos a posição do array com algum valor

console.log(Hudson.nome) //acessar só o nome em especifico e assim vai, uma estrutura mais organizada
console.log(Hudson.telefone)

const Maria = {
    nome: "Maria",
    telefone: 0000000,
    empresa: "Kenzie Academy",
    Email: "Maria@gmail.com"
}
// e com isso conseguimos mandar as pessoas para dentro de um vetor com essas informações obtidas no objeto
const arrayPessoas = []
arrayPessoas.push(Hudson)
arrayPessoas.push(Maria)

console.log(arrayPessoas) */