const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial (IA) vai revolucionar positivamente diversas indústrias?",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "A inteligência artificial pode ser uma ferramenta ética e responsável?",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "A inteligência artificial vai superar a inteligência humana em todos os aspectos?",
        alternativas: [
        "Alternativa 1",
        "Alternativa 2"
        ]
        },
];

Funcion mostraPergunta (){
caixaPerguntas.textContent = perguntas[0].enunciado;
}
mostrarPergunta ();
