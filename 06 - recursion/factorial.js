
const factorial = (number = 0) => {
    if(number < 1){
        return 1;
    }

    return number * factorial(number-1);
}

let result = factorial(5);

console.log(result);