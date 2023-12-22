function removeNodes(listHead, x) {
    // Write your code here
    var s = listHead.split('→');
    for( i = 0; i< s.length; i++){
        if(s[i] > x ){
            //delete s[i];
            s.splice(i, 1);
        }
    }
    console.log(s);
}

removeNodes('1 → 2 → 3 → 4 → 5', 3);