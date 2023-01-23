var purchased2 = {
    shoes: 50,
    shoesTax: 1.2,
    totalPrice: function () {
        var calculation = this.shoes * this.shoesTax;
        console.log("Total Price: " + calculation);
    }
}
purchased2.totalPrice();

const car = {
    engine: true,
    steering: true,
    speed: "slow"
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
sportsCar.test = "Test";
console.log("The sportsCar object:", sportsCar);

for (prop in sportsCar) {
    console.log(prop);
}
for (prop of Object.keys(sportsCar)) {
    console.log(prop + " : " + sportsCar[prop]);
}

console.log(`Hello you are 
ok with this '${sportsCar.speed}'
console log`);