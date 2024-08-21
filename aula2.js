// var = criando variavel

//var altura = 10;
//var largura = 5;
//var area = altura * largura;
//console.log(area);

// let = cria variavel(forma atualizada de criar variaveis)

const altura = 8
const largura = 10
const forma = "Retangulo";
let area;

if (forma === "Retangulo"){
    area = altura * largura
}
else if(forma === "triangulo"){
    area = (altura * largura) / 2;
}
else{
    console.log("Deveria ser forma")
}
console.log(area);

// const = Sem permance a mesma(varieveis fixas, ou seja, nao se alteram)
// Condiçoes Booleanas(Truly or Falsy)
// 0 = false
// 1 = true

const usuarioLogado = true;
const contaPaga = false;
console.log(0 == false); //true
console.log(contaPaga == 0) //true
console.log(contaPaga === 0) //false
console.log("" == false) //true
console.log(1 == true) //true

// Nulo e indefinido
//Nulo = vazio ou nada (tem valor)

let Gustavo;
let Vini = null;
let numero = 24;
let texto = "odeio chuchu e berinjela"

//  consultando tipo de variaveis

console.log(typeof Gustavo)
console.log(typeof Vini)
console.log(typeof numero)
console.log(typeof texto)

// conversao de variavel

const numberNumero = 657;
const stringNumero = "657"

console.log(numberNumero == stringNumero) // compara apenas o valor numerico
console.log(numberNumero === stringNumero) // compara o tipo de variavel
console.log(numberNumero + stringNumero) //concatenaçao
console.log(numberNumero + Number(stringNumero)) // soma de numeros(string convertida em Number)
