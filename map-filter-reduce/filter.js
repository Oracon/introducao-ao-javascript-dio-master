const array = [1, 2, 3, 3, 3, 4, 5, 5];
const models = [];

// filter to clean repetitive elements
for (var i = 0; i < array.length; i++){
    if (array.indexOf(array[i]) === i){
        models.push(array[i]);
    };
};

// Using filter
var uniqueProducts = array.filter(function(elem, i, array){
    return array.indexOf(elem) === i;
});

console.log(models);
console.log(uniqueProducts);

/*
Array.prototype.filter()

Cria um novo array com todos os elementos que
passaram no teste da função fornecida

var newArray = arr.filter( callback[, thisArg] )
*/