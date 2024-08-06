const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual estação vc prefere?",
        alternativas: [
            {
                texto: "Verão e Outono",
                afirmacao: "Você é uma pessoa mais aberta  que tende a demontrar seus sentimentos com facilidade e respeito, "
            },
            {
                texto: "Inverno e Primavera",
                afirmacao: "Você é uma pessoa mais fria,"
            }
        ]
    },
    {
        enunciado: "Você prefere doce ou salgado?",
        alternativas: [
            {
                texto: "Salgado",
                afirmacao: "Tem um paladar mais adulto,"
            },
            {
                texto: "Doce",
                afirmacao: "Tem um paladar um pouco mais infantil, junto com a mentalidade,"
            }
        ]
    },
    {
        enunciado: "Para vc oque importa mais,a paz ou a razão?",
        alternativas: [
            {
                texto: "A paz ",
                afirmacao: "Já entede seus princípios,"
            },
            {
                texto: "A razão ",
                afirmacao: "já que quer estar certo acima de tudo, "
            }
        ]
    },
    {
        enunciado: "Prefere sair com roupas coloidas ou mais básicas?",
        alternativas: [
            {
                texto: "Básicas",
                afirmacao: "Sabe que não precisa se amostrar,"
            },
            {
                texto: " Coloridas",
                afirmacao: "gosta de ficar se aparecendo para os outros,"
            }
        ]
    },
    {
        enunciado: "prefere sair ou ficar em casa ?",
        alternativas: [
            {
                texto: "Ficar em casa ",
                afirmacao: "logo vc é uma pessoa mais calma"
            },
            {
                texto: "Sair de casa ",
                afirmacao: "Logo vc é uma pessoa mais explosiva"
            }
        ]
    },
];

//Declaração de variáveis
let atual = 0; //variável que mantem o inice da pergunta atual no array 'perguntas'
let perguntaAtual; // variável que armazena a pergunta atual
let historiaFinal = ""; //String que acumula as afirmações selecionadas pelo usuário, formando uma narrativa final.

//Essa função tem como objetivo exibir a pergunta atual ou o resultado final se todas as perguntas tiverem sido respondidas.
function mostraPergunta() {
    if (atual >= perguntas.length) { //Verifica se o índice atual excede o número de perguntas disponíveis. Se sim, chama mostraResultado e retorna, encerrando a função.
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual]; //Atribui à variável perguntaAtual a pergunta atual do array perguntas.
    caixaPerguntas.textContent = perguntaAtual.enunciado; //Define o conteúdo de texto do elemento caixaPerguntas como o enunciado da pergunta atual.
    caixaAlternativas.textContent = ""; //Limpa o conteúdo do elemento caixaAlternativas.
    mostraAlternativas(); //Chama a função mostraAlternativas para exibir as alternativas da pergunta atual.
}

//Essa função tem como cobjetivo exibir as alternativas da pergunta atual como botões e definir a ação ao clicar neles.
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) { // Itera sobre cada alternativa da pergunta atual.
        const botaoAlternativas = document.createElement("button"); //Cria um novo elemento de botão para cada alternativa.
        botaoAlternativas.textContent = alternativa.texto; //Define o texto do botão como o texto da alternativa.
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); //Adiciona um ouvinte de eventos ao botão, que chama a função respostaSelecionada passando a alternativa selecionada quando o botão é clicado.
        caixaAlternativas.appendChild(botaoAlternativas); //Adiciona o botão ao elemento caixaAlternativas.
    }
}

//Essa função tem como objetivo processar a resposta selecionada, atualizar a narrativa final e avançar para a próxima pergunta.
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao; //Obtém a afirmação associada à alternativa selecionada.
    historiaFinal += afirmacoes + " "; //Adiciona a afirmação à historiaFinal.
    atual++; //Incrementa o índice da pergunta atual.
    mostraPergunta(); //Chama a função mostraPergunta para exibir a próxima pergunta.
}

//Essa função tem como objetivo exibir a narrativa final baseada nas respostas do usuário.
function mostraResultado() {
    caixaPerguntas.textContent = "De acordo com suas escolhas...."; //Define o conteúdo de texto do elemento caixaPerguntas para informar o usuário sobre o resultado.
    textoResultado.textContent = historiaFinal; //Define o conteúdo de texto do elemento textoResultado como a narrativa final acumulada.
    caixaAlternativas.textContent = ""; // Limpa o conteúdo do elemento caixaAlternativas.
}

mostraPergunta(); //Chama a função mostraPergunta para iniciar o questionário exibindo a primeira pergunta.
