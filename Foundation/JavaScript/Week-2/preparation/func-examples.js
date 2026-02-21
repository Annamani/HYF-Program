function min(a, b) {
    // return (a > b) ? b : a;
    if (a > b)
        return console.log(b);
    else
        return console.log(a);
}
// let result = min(2, 5);
min(2, 5);
min(3, -1);
min(1, 1);

// Function pow(x,n)

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    console.log(result);
}

pow(3, 2);
pow(3, 3);
pow(1, 100);

