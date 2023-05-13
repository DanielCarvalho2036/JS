function fatorial(n){
    var fat = 1
    for (c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))