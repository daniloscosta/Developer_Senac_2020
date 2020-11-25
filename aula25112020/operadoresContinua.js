// Revisando
/*
+, -, *, /, % (Adição, subtração, multiplicação, divisão e módulo)
+ (Concatenação)
+, - (Operadores unários)
*/

let texto1 = 'Uma';
let texto2 = 'String';
console.log(texto1 + texto2);

let num1 = 10;
console.log(num1);

// Operadores de comparação (Retornam um booleano)
// = -> Atribuição
let numAnon = 16;
console.log(numAnon);
// Igualdade de valor
console.log(10 == '10');
// Igualdade de valor e tipo
console.log(20 === '20');
// Diferente comparação de valor 
console.log(10 != '10');
// Diferente comparação valor e tipo
console.log(10 !== '10');

/*Concatenação lógica 'ou', é necessário que
pelo menos que um teste seja verdadeiro para
que o resultado seja verdadeiro.
*/

/* ||
Concatenação lógica 'ou', é necessário que pelo
menos que um teste seja verdadeiro para 
retorna verdadeiro
*/
let x = 10, y = '5';
if (x == 10 || y ===5) {
    console.log('Teste lógico verdadeiro');
} else {
    console.log('Teste lógico falso');
}

/* &&
Concatenação lógica 'e', é necessário que todos 
os testes sejam verdadeiros para retornar verdadeiro
*/
/*>, <, >=, <=
Comparação: maior do que; menor do que;
maior igual a; menor igual a
*/
let m = 10, n = 5;
if (m > n ) {
    console.log('Sim');
} else {
    console.log('Não');
}
