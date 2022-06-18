//String
var nome = "Lorena";

console.log(typeof nome); //verifica o tipo da variável

//concatenando strings
var sobrenome = "Vasconcellos";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

//somando número com string
var gols = 100;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`; //utilizando template S
var frase3 = `Romário fez ${gols * 2} gols`; //isso não funciona numa string normal

console.log(frase1);
console.log(frase2);
console.log(frase3);

//Number
var idade = 19;

console.log(typeof idade);

var pi = 3.14; //ponto usado para decimal
var exp = 2e10; //2 elevado a base 10

console.log(pi, exp);

//Operadores Aritméticos
var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 2 ** 4; //16
var modulo = 14 % 5; //4

//Operadores Aritméticos Unários
var incremento1 = 5;
console.log(incremento1++); //no próximo cosole.log será adicionado 1
console.log(incremento1);
var incremento2 = 5;
console.log(++incremento2); //incrementa imediatamente
