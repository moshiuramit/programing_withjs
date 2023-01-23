// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (var d of dairy) {
        console.log(d);
    }
}
logDairy();

// Task 2 for of loops
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for ( key of Object.keys(bird)){
        console.log(key, ": ", bird[key]);
    }
}
birdCan();
// Task 3 for in loops

function animalCan() {
    for ( prop in bird){
        console.log(prop, ": ", bird[prop]);
    }
    
}
animalCan();