"use strict";
var _a;
console.log("Hello world");
let age = 20;
if (age < 50)
    age += 10;
let numbers = [1, 2, 3, 4, 5];
let users = [1, "Mosh"];
users[0].valueOf;
users[1].toUpperCase;
users.push(age);
console.log(users);
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log('Convert 500KG to' + kgToLbs(500) + ' Lsb');
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('Hola');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
if (customer !== null)
    console.log(customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
