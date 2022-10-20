
const maxSubArraySum = (elements = [], size = 0) => {
    /**
     * elements = Elements to be passed
     * size - size of the window
     * @type {number}
     */
    let maxSum = 0;
    let tempSum;
    if(elements.length < size){
        return null;
    }

    for(let i=0; i < size; i++ ){
        maxSum += elements[i];
    }


    for (let i=size; i<elements.length; i++){
        let otherIndex = i - size;
        tempSum = (maxSum - elements[i-size]) + elements[i]

        if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }

    return maxSum;
}

let result = maxSubArraySum([3,2,3,4,5,1,1,4], 3);

console.log(result);