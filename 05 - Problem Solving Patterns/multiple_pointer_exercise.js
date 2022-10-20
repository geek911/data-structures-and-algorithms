
const countUniqueValues = (numbers = []) => {

    let i = 0;

    for (let j = 0; j < numbers.length; j++){

        if(numbers[i] !== numbers[j]){
            i++;
            numbers[i] = numbers[j];
        }
    }

    return i+1;

}

const result = countUniqueValues([1,1,1,1,1,2,2,2,2,2,3]);

console.log(result);
