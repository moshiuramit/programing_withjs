const alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

console.log(alphabets[0]);

const newArray = [...alphabets, ...numbers];
console.log(newArray);

function sumAndMultiply(a,b ){
    return [ a+b, a*b];
}
// Nomall way 
const result =  sumAndMultiply(2,5); // return an array for both sum and multiply

// Using array destructuring 
//const [sum, multiply] =  sumAndMultiply(2,5); // return two different variable  for sum and multiply
const [sum, multiply, division = "No division"] =  sumAndMultiply(2,5); // return two different variable  for sum and multiply
console.log(result); 
console.log( sum, multiply); 


/* Object Destructuring  */
const personOne = {
    name: 'kyle',
    age: 32,
    address: {
        city: 'Some Where ',
        state: ' The State'
    }
}

const personTwo = {
    name: 'Sally',
    age: 24,
    address: {
        city: 'Some Where else',
        state: 'The Other State'
    }
}

const {name, age} = personTwo; // destructuring personTwo only using name and age
const {name: firstName, age: per1Age, ...rest } = personOne; // destructuring personTwo only using name and age

console.log(firstName, per1Age, "Person Two: " + name, age + "and rest are");
console.log(rest);