// Conceitos básicos sobre Arrays
// Indice       0         1        2
let frutas = ['Maçã', 'Banana', 'Pera'];
//console.log(frutas.lenght);

//console.log(typeof(frutas));
// Métodos
// push -> acrescenta um elemento ao final do array
frutas.push('Limão');
console.log(frutas.lenght);
console.log(frutas);

// unshifit -> acrescenta no inicio um elemento ao final do array
frutas.unshift('Goiaba');
console.log(frutas.lenght);
console.log(frutas.sort().join(' '));

// Vizualizando elemento atraves de indice
console.log(frutas[3]);

// pop -> deleta o ultimo elemento do array
frutas.pop('Limão');
console.log(frutas.lenght);
console.log(frutas);

// shift -> elimina o primeiro elemento do array
frutas.shift();
console.log(frutas.lenght);
console.log(frutas);

// Iteração do Array
frutas.forEach(item => console.log(item));
frutas.forEach((item, index, array) => {
    console.log(index, item);
   // console.log(index);
   // console.log(array);
})
