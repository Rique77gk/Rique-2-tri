const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair de casa, você encontra a cidade coberta por uma camada espessa de neve. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Sentiu-se animado com a ideia de um dia de diversão na neve e atividades ao ar livre."
            },
            {
                texto: "Isso é preocupante!",
                afirmacao: "Ficou preocupado com o impacto da neve no transporte e na rotina do dia a dia."
            }
        ]
    },
    {
        enunciado: "A escola decidiu aproveitar o clima para realizar atividades especiais ao ar livre. O que você faz?",
        alternativas: [
            {
                texto: "Participa das atividades ao ar livre, como jogos de neve e construção de bonecos de neve.",
                afirmacao: "Aproveitou ao máximo as atividades de inverno e se divertiu com os colegas."
            },
            {
                texto: "Prefere ficar dentro da escola, ajudando a organizar atividades internas ou estudando.",
                afirmacao: "Optou por se manter em ambientes aquecidos e contribuiu para a organização interna."
            }
        ]
    },
    {
        enunciado: "Durante uma caminhada na neve, você encontra uma cabana antiga. O que você faz?",
        alternativas: [
            {
                texto: "Decide explorar a cabana para ver o que ela pode esconder.",
                afirmacao: "Ficou curioso e explorou a cabana, encontrando possivelmente itens interessantes ou histórias do passado."
            },
            {
                texto: "Passa direto e continua sua caminhada, sem se desviar do seu plano original.",
                afirmacao: "Preferiu manter seu percurso e evitar distrações, focando em sua caminhada na neve."
            }
        ]
    },
    {
        enunciado: "Com a neve acumulada, você precisa preparar um evento especial para a comunidade. Como você procede?",
        alternativas: [
            {
                texto: "Organiza um festival de inverno com atividades como patinação no gelo e competições de construção de bonecos de neve.",
                afirmacao: "Se dedicou a criar um evento divertido e acolhedor para a comunidade aproveitar o clima."
            },
            {
                texto: "Planeja um encontro interno com atividades como uma noite de filmes e jogos, para evitar o frio intenso.",
                afirmacao: "Optou por atividades internas que oferecem conforto e aconchego durante o inverno rigoroso."
            }
        ]
    },
    {
        enunciado: "Após um longo dia na neve, você decide fazer um prato especial para se aquecer. O que você escolhe?",
        alternativas: [
            {
                texto: "Prepara uma sopa quente ou um fondue para aquecer e compartilhar com a família ou amigos.",
                afirmacao: "Escolheu um prato acolhedor e saboroso que ajuda a combater o frio e reúne as pessoas."
            },
            {
                texto: "Faz um prato rápido e simples, como um sanduíche quente ou um prato de massa.",
                afirmacao: "Optou por algo prático e rápido, sem perder tempo preparando refeições complexas."
            }
        ]
    },
    {
        enunciado: "No final da temporada de neve, como você reflete sobre a experiência?",
        alternativas: [
            {
                texto: "Sente-se grato pelas experiências e memórias que a neve trouxe, e está ansioso para a próxima temporada.",
                afirmacao: "Aprecia a temporada de inverno e espera por mais oportunidades de aproveitar o clima no futuro."
            },
            {
                texto: "Está aliviado por o inverno ter terminado e ansioso para o retorno das temperaturas mais amenas.",
                afirmacao: "Ficou contente pelo fim da temporada de neve e está pronto para a chegada da primavera e do clima mais ameno."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumo da sua experiência na temporada de neve:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
