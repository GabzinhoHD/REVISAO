// Erros comuns

// const numero; Primeiro Erro:(const nao declarada)

const minhaVar= "oi" // Segundo Erro:(Nao declarar uma variavel e chamar-la no codigo)
console.log(minhaVar) // exemplo: chamar minhavar

console.error("Isso esta errado") // Declaraçao Erros:(Voce pode declara um erro com o console.error)

// Condicional abreviada if(){}

let idadeMinima = 34;
let idadeCliente = 18;
if(idadeCliente >= idadeMinima){
    console.log("Pode")
}
else{
    console.log("nao vai poder")
}

// Valor tenario
// Modo ternario, utilizado(______ >= ______ ? _____ : _____ )
// Modo ternario, utilizado(______ <= ______ ? _____ : _____ )
// Modo ternario, utilizado(______ == ______ ? _____ : _____ )
console.log(idadeCliente >= idadeMinima ? "Pode" : "nao vai")

// Template String

const nome = "Roger";
const idade = 45;
const cidadeNatal = "Natal"
const apresentaçao = "Meu nome é " + nome + ", minha idade é " + idade + ", e nasci em " + cidadeNatal;
console.log(apresentaçao)
const apresentaçao02 =`Meu nome é ${nome}, minha idade é ${idade}, minha cidade natal é ${cidadeNatal}`
console.log(apresentaçao02)