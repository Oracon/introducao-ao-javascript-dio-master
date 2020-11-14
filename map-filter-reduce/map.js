/*
Array.prototype.map()

Chama o callback para cada elemento e devolve um
novo array com a mesma quantidade de items

var newArray = arr.map(callback [, thisArg])
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

/**
 * Map
 * Retorna um novo array com a mesma qntdade de
 * elementos que o array inicial
 */

// const mapPetNames = pets.map( (pets) => {
//     return pet.name;
// });

const mapPetNames = pets.map( (pets) => pets.name );

/**
 * ForEach
 * Não retorna um novo array com a mesma
 * qntdade de elementos
 */
const forEachPetNames = [];

pets.forEach((pet) => {
    forEachPetNames.push(pet.name);
});


console.log(mapPetNames);
console.log(forEachPetNames);
