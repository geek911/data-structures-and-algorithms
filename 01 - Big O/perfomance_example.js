// Less performance solution

let addUpTo = (number) => {

    let total = 0;

    for(let i = 1; i <= number; i++){
        total += i;
    }

    return total;
}

let start = performance.now();

let result = addUpTo(10000000);

let stop = performance.now();

let display = {
    time : (stop - start),
    result: result
}

console.table(display);

// more perfomance solution

addUpTo = (number) => {

    return number * (number + 1) / 2;
}

start = performance.now();

result = addUpTo(10000000);

stop = performance.now();

display = {
    time : (stop - start),
    result: result
}

console.table(display);