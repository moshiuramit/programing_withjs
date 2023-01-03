function addNum(a, b) {
    var c = a + b;
    //return c;
    console.log(c);
}

addNum(2,4); //call or invoke a function

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++){
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test", "t");