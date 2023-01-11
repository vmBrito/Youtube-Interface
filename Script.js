let listaDestaque = document.querySelector(".Listavideos")
//PEGAMOS A LISTA PARA TAMBEM PASSAR DE PARAMETRO
//PARA DIZER QUAL LUGAR QUE VOCE VAI QUERER LISTAR

let secaoTodosVideos = document.querySelector(".secaoTodosVideos ul")
//reaproveitamento da função ja que ela ja foi criada e so vamos reaproveitar

//ele colocou uma lista que é um array com 4 objetos dentro e esses objetos sao os videos, e precisamos ler esse array e mostrar na tela os seus valores
//nao vamos deixar eles fixos, vamos excluir os do html, o javascript que vai ser o responsavel por alimentar a lista de forma visual

let listaReproducao = document.querySelector(".secaoAFila")

//ARRAY DE VÍDEOS
const listaVideos = [
    {
        id: 0,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./img/thumb1.webp"
    },
    {
        id: 1,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./img/thumb2.webp"
    },
    {
        id: 2,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./img/thumb1.webp"
    },
    {
        id: 3,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./img/thumb2.webp"
    }
];

//para conseguir percorrer o array e pegar todos os videos precisamos de uma estrutura de repetição
//criamos uma função para listar videos e usamos o for 

                                                        //RESUMO DE TUDO
//temos uma função que lista videos para mim por meio do loop for para percorrer dentro do meu Array, vai ler todos os videos em cima e para cada video vai pegar
//o titulo, visualização, descrição e thumbnail e para cada video que ele encontrar nesse loop ne. ele vai chamar a fução criar template
//e a função criar template recebe como argumento o titulo, visualização, descrição e thumbnail
//secunda parte....


//PODEMOS PASSAR ONDE QUEREMOS LISTAR OS VIDEOS TAMBEM ATRAVES DO LISTADESTAQUE LA EM CIMA, NÃO É OBRIGATORIO, É TIPO UMA OBSERVÇÃO
function listarVideos(listaDestaque){

    for(let i = 0; i < listaVideos.length; i = i + 1){
        console.log(listaVideos[i].titulo)
        console.log(listaVideos[i].visualizacoes)
        console.log(listaVideos[i].descricao)
        console.log(listaVideos[i].thumbnail)
        
        //e eu vou pedir para a função fazer o trabalho de criar os templates percorrendo cada um dos videos que estao ali
        criarTemplate(listaDestaque ,listaVideos[i].titulo,   listaVideos[i].visualizacoes,  listaVideos[i].descricao,   listaVideos[i].thumbnail)
        
    }

}
//chamada da função de listar videos
listarVideos(listaDestaque)

listarVideos(secaoTodosVideos)

//criando uma função para criar ou construir o template do projeto igual antigamente o Li fazia
//declarei uma função para criar o template do video e criar o proprio Li como se tivesse dentro do html

//FUNÇÃO QUE CRIA O TEMPLATE

//COMO NOSSAS FUNÇÕES PODEM RECEBER PARAMETROS ELA RECEBE

                                                            //RESUMO DE TUDO(SECUNDA PARTE)
//E A FUNÇÃO CRIAR TEMPLATE FAZ TODO TRABALHO DE ATRIBUIÇÃO A LISTA E AO HTML

function criarTemplate(ListaDestaque,titulo,visualizacoes,descricao,thumbnail){

    //CRIANDO UM ELEMENTO DO TIPO HTML(li)
    let li = document.createElement("li")
    //selecionou a lista do html para jogar o elemento criado aq no js lá pra dentro da minha lista

    //SELECIONANDO UM ELEMENTO DO MEU HTML, A LISTA DESTAQUES
    //Acesse meu documento e selecione o que tenha essa classe

    //let listaDestaque = document.querySelector(".Listavideos") <-FICAVA AQ E FUNCIONAVA

    //O CHAMADO FOI LA PRA PARTE DE CIMA(PARA SERVIR TAMBEM DE PARAMETRO PARA EM QUAL LOCAL ADICIONAR O VIDEO)

    //vou pegar esse li e vou atribuir um valor html para ele(template string) criei um elemento li no js e pedi para o js mandar essa estrutura la pra dentro do html
    //ESTOU ADICIONANDO TAGS E O CONTEÚDO PARA DENTRO DESSE LI

    li.innerHTML = `
    <figure>
        <a href="https://youtu.be/nwqMcOJtxLM"><img src="${thumbnail}" alt="${titulo}"></a>
    </figure>
    <div>
        <h3>${titulo}</h3>
        <span>${visualizacoes}</span>
        <p>
           ${descricao}
        </p>
        <button class="adicionar">ADICIONAR A FILA</button>
    </div>
    `
    console.log(li)

    //e ai no final a gente faz assim:
    //pegue essa lista e adicione um filho lá dentro e o filho que vamos adicionar vai ser esse li criado aq
    //entao acabamos de crirar um template e elemento via js
    //ESTOU ADICIONANDO O LI, PREENCHIIDO DENTRO DA MINHA LISTA LA NO HTML
    //PEGA ESSA LISTA E ADICIONA O LI COMO FILHO
    ListaDestaque.appendChild(li)

}
//RESUMIDAMENTE ELE CIROU UM LI DENTRO DO JS E INSERIU NA SUA ESTRUTRURA TODO AQUELE CODIGO ACIMA, MAS NAO TEM ONDE ELE APARECER JÁ QUE SO FOI CRIADO
//ENTAO PARA ELE PODER APARECER A GENTE VAI NO HTML BUSCAR ONDE É PARA APARECER (NESSE CASO É O UL) APOS SELECIONAR O UL E TRAZER PARA O JS O UL RECEBE COMO FILHO O CODIGO QUE CRIAMOS PARA O LI

//PARA PODER ADICIONAR A FILA TEMOS QUE USAR A FUNCIONALIDADE DE CLICK DO JS
//RESPONSAVEL POR MONITORAR EVENTOS DO JS DENTRO DO MEU UL LA NO HTML, UM ESCUTADOR E EU QUERO ESCUTAR TODO EVENTO DE CLICK
//E O QUE EU QUERO QUE ELE FAÇA, EU QUERO QUE ELE EXECUTE UMA FUNÇÃO
//adicionei um escutador dentro da minha UL que vai ficar monitorando qualquer evento do tipo click dentro da minha ul, se clicar, chama a função

listaDestaque.addEventListener("click", adicionarAFIla)

//mas para especificar para qual lugar voce tem que clicar (no nosso caso o botao e nao em toda a lista) precisamos passar um parametro de event
//e a logica é o event list ta escutando um evento e se eu escutar eu mando para a função ou te aviso um evento para voce descobrir quem que foi(depois de adicionar o event
//ja que antes disso poderiamos clicar em qualquer parte)

//entao com o event eu consigo saber exatamente onde eu cliquei entao com isso voce consegue pegar o target que é o elemento que está recebendo o clicke
//se clicar nas visualizções vai aparecer as visualizações, se clicar na imagem vai aparecer a imagem coisa do tipo
//e se adicionarmos o target.TagName conseguimos o nome da onde estamos apertando, apertou na imagem = img, apertou no titulo = h3, visualisações = span...
//entao com isso conseguimos fazer uma verificação

function adicionarAFIla(event){
    const buttonName = event.target.tagName
    const button = event.target
    //o button name é so para conferir onde foi apertado mas o button que realmente vai ser usado para acessar o elemento
    //ja que o button name acessa o nome e voce confere e o button recebe onde foi clicado e quando sabemos onde foi clicado podemos voltar para achar a tag pai

    //verifico o nome, se o nome tiver certo eu pego o botao de verdade
    //colocando o valor ou nome de onde foi clicado dentro de uma variavel
    if(buttonName == 'BUTTON'){ //se o botao for igual ao button name já que é por nome faça
        const li = button.closest("li")//esse cloesest acessa o elemento pai e ancestral desse botao entao ele vai voltar pra trás ate encontrar o pai dele que seja li e com isso temos o li em mãos
        //fazendo isso conseguimos pegar os documentos por meio do clique e agora que temos ele so precisamos joga-lo para a fila de reprodução
        //selecionamos a lista de reprodução(a fila) la do html entao so precisamos jogar esse li la para dentro

        const liCopy = li.cloneNode(true)
        //tivemos que criar uma copia do li pq se nao os videos acabavam sumindo quando ia para a fila de reprodução, e por isso a copia
        //ao inves de pegar o documento e jogar ele la pra dentro voce faz uma copia dele para voce nao perder

        listaReproducao.appendChild(liCopy)
    }
}
//so que agora nos tambem teria que remover da lista de reprodução tambem entao pra fazer isso temos que fazer praticamente a mesma coisa so que em outra lista

//funçao de clique
listaReproducao.addEventListener("click",removerAFIla)

//função para remove o elemento
function removerAFIla(event){
    //pega o nome do elemento clicado
    const elementoName = event.target.tagName
    //pega o elemento clicado
    const elemento = event.target
    //verifica o que ele é(No caso se nao é li)
    if(elementoName !== 'LI'){
        //acessamos o seu elemento pai que no caso é o li para ser eliminado 
        elemento.closest("li").remove()
        //faz a mesma coisa que na outra so que ao inves de clonar voce so precisa eliminar(so remover da lista de reprodução)
        //e trocar o botao por li para que somente no clicar do li vai remover ele, muito mais simples qeu o outro que tem que duplicar
        //POREM AINDA PRECISAMOS DO CLOSET POIS O CLIQUE PODE SER EM QUALQUER LUGAR
        //DICA:: QUANDO NAO SOUBER ONDE ESTÁ O ERRO IR COLOCANDO CONSOLE LOG ATE ACHAR


        //fizemos assim, pegamos o elemento e se o elemento for diferente de um li que é oq ta vindo eu preciso pegar esse elemento..exemplo
        //se clicarmos vai vim um h3 e o nome vai ser diferente de li. entao a gente vai pegar esse elemento e pegar o ancestral dele que vai ser um li e ai vamos por fim remover seu ancestral
        //so vai remover se clicar em uma area que é do li

    } 
}