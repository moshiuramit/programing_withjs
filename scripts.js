console.log('Hello World');
var name = "John";
//if else 
var result = 50;
if (result > 40) {
    console.log("Congratulations you have passed the Test ");
} else {
    console.log("Sorry you did not passed the test");
}

var age = 68;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if(age < 65 && age >= 18){
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

// switch statement 
var day = "Sunday";
switch (day) {
    case "Monday":
        console.log('Do something')
        break;
    case "Tuesday":
        console.log('Do something')
        break;
    case "Wednesday":
        console.log('Do something')
        break;
    case "Thrusday":
        console.log('Do something')
        break;
    case "Friday":
        console.log('Do something')
        break;
    case "Saturday":
        console.log('Do something')
        break;
    case "Sunday":
        console.log('Sunday Funday')
        break;
    default:
        console.log('There is no such day')
        break;
}

for (var i = 0; i <= 10; i++) {
    console.log(" Value is " + i);
}

for (var i = 10; i > 0; i--){
    console.log(i);
}
console.log("Happy New Year");

//while loop
var counter = 2;
while (counter < 5) {
    console.log(counter);
    counter = counter + 1;
}
console.log("happy End");

for (var i = 2023; i < 2025; i++){
    console.log(i);
    for (var j = 6; j < 9; j++){
        console.log("----"+j);
    }
}
for (i = 0; i < 2; i++) {
    console.log("Hello");
}