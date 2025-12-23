//Declarar un arreglo



var frutas = ['uva','pera','manzana','banana'];
console.table(frutas);

frutas.push('kiwi');
frutas.unshift('fresa');



var frutasForeach = frutas.forEach((fruta) => {
    return fruta
});

console.log('===============================')

var frutasMap = frutas.map((fruta) => {
    return fruta.toUpperCase();
});

console.log(frutasForeach)
console.log(frutasMap)


