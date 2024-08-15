const caixaPrincial = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [
            {
                texto:'alternativa01',
                afirmaçao:'afirmação01'
            },
            {
                texto:'alterantiva02',
                afirmaçao:'afirmação02'
            }
        ]
    },
    {
        enunciado: "texto02",
        alternativas: [
            {
                texto:'alternativa03',
                afirmaçao:'afirmação03'
            },
            {
                texto:'alterantiva04',
                afirmaçao:'afirmação04'
            }
        ]
    },
    {
        enunciado: "texto03",
        alternativas: [
            {
                texto:'alternativa05',
                afirmaçao:'afirmação05'
            },
            {
                texto:'alterantiva06',
                afirmaçao:'afirmação06'
            }
        ]
    },
    {
        enunciado: "texto04",
        alternativas: [
            {
                texto:'alternativa07',
                afirmaçao:'afirmação07'
            },
            {
                texto:'alterantiva08',
                afirmaçao:'afirmação08'
            }
        ]
    },
    {
        enunciado: "texto05",
        alternativas: [
            {
                texto:'alternativa09',
                afirmaçao:'afirmação09'
            },
            {
                texto:'alterantiva10',
                afirmaçao:'afirmação10'
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botao
        caixaAlternativas.appendchild(botaoAlternativas);
    };
}

mostraPerguntas();
