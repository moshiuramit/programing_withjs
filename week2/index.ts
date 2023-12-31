console.log("Hello world");

let age: number = 20;
if (age < 50) 
    age += 10;


// Arrays 

let numbers = [1,2,3,4,5];
let users: [number, string] = [1, "Mosh"];
users[0].valueOf // all number methods 
users[1].toUpperCase // all string methods
users.push(age);

console.log(users);


// Objects 
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {console.log(date);
    }
};

// Functions 
function kgToLbs(weight: number | string): number {
    //Narrowing 
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

console.log('Convert 500KG to' + kgToLbs(500) + ' Lsb');

// Literal Type () Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = 'cm' | 'inch';


// Null and undefined 
function greet(name: string | null | undefined) {  // need to use unior operator to pass null or undefined as a parameter
    if(name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('Hola');
}

greet(null); // by default type script is strict about null and undefined 

// Optional Chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date() }; 
}
let customer = getCustomer(1);
if(customer !== null)
    console.log(customer.birthday); // or Optional Chaining below 
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator 
// customer?.[0]

// Optional call 
let log: any = null;
log?.('a'); // this will log only if referencing an actual function otherwise will get undefined 