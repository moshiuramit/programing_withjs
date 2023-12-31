console.log("Hello world");
var age = 20;
if (age < 50)
    age += 10;
// Arrays 
var numbers = [1, 2, 3, 4, 5];
var users = [1, "Mosh"];
users[0].valueOf; // all number methods 
users[1].toUpperCase; // all string methods
users.push(age);
console.log(users);
// Objects 
var employee = {
    id: 1,
    name: 'Mosh',
    retire: function (date) {
        console.log(date);
    }
};
// Functions 
function kgToLbs(weight) {
    //Narrowing 
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log('Convert 500KG to' + kgToLbs(500) + ' Lsb');
