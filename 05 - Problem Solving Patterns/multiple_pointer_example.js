// should be sorted all the time
const sumZero = (numbers = []) => {

    let left = 0;
    let right = numbers.length - 1;

    while (left < right){
        let sum = numbers[left] + numbers[right];

        if(sum === 0){
            return [numbers[left], numbers[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

const result = sumZero([-4, -3, -2, -1, 0, 2, 4,5,3, 10, 13, 34]);

console.log(result);