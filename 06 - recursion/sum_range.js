const sumRange = (number = 0) => {
    if(number === 1){
        return 1;
    }else if(number === 0) {
        return 0;
    }

    return number + sumRange(number -1 );
}

let result = sumRange(3);

console.log(result);