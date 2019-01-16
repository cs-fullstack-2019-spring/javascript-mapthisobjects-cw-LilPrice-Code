//Use .map to create a new array of objects where each object has a property
// for petnumber and pettype based on the elements in the array.
// Print the new array of objects.


    var pets = [
        "dog",
        "cat",
        "pig",
        "hamster"
    ];
 var pettype = pets.map(function (value, index, array) {
     return value;
 });
 var petnumber = pets.map(function (value, index, array) {
     return index;
 });
 console.log(pettype);
 console.log(petnumber);

 // new array to hold objects