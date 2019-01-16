//Use .filter to create an array of pet objects that only holds the hamsters.
var pets = [
    {
        name: 'Spot',
        type: 'Hamster'
    },
    {
        name: 'Harry',
        type: 'Hamster'
    },
    {
        name: 'Kitty',
        type: 'Cat'
    }
];
var pettype = pets.filter(function (value, index, array) {
    return array === 'Hamster';
};
console.log (pettype);
