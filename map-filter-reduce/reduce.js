/*
Array.prototype.reduce()

Executa uma função para cada elemento
retornando um único valor de retorno

var newArray = arr.reduce(callback [, thisArg])
*/
const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 0.01
    }
];
// total - vai se manter a cada iteração
// pet - item que está sendo iterado
// 0 - valor inicial para reduce começar
const totalWeight = pets.reduce( (total, pet) => {
    return total + pet.weight
}, 0);

console.log(totalWeight.toFixed(2));
