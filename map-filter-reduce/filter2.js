const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: '10'
    },
    {
        name: 'miau',
        type: 'cat',
        age: '2'
    },
    {
        name: 'gulp',
        type: 'fish',
        age: '1'
    }
];
// filter será chamado p cada element (pet) => e executará um test lógico
// se o teste lógico for True, retorna ao novo array
// const newPets = pets.filter( (pet) => {
//     return pet.age < 5; 
// });



// Exugando o filter
const menorQueCinco = (numero) => {
    return numero < 5
};

const newPets = pets.filter( ({ age }) => menorQueCinco(age));

console.log(pets);
console.log(newPets);
