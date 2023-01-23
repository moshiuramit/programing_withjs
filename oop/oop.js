// OOP 1
var purchased1 = {
    shoes: 100,
    shoesTax: 1.2,
    totalPrice: function () {
        var calculation = purchased1.shoes * purchased1.shoesTax;
        console.log("Total Price: " + calculation);
    }
}
purchased1.totalPrice();

const meal = ["soup", "steak", "ice cream"]
    let [starter] = meal;
console.log(starter);
    
function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);