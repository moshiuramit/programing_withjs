//functional programming example 
var shoes = 100;
var shoesTax = 1.2;
function totalPrice(shoes, tax) {
    return shoes * tax;
}
var toPay = totalPrice(shoes, shoesTax);
console.log(toPay);


