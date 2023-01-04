var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');

console.log(clothes.length);

var result = "Hello".indexOf('l');
var mathval = 9.5;
console.log(Math.round(mathval));

try {
    (5).pop();
    
} catch (err) {

    console.log(err);
}

console.log("Run this after error");