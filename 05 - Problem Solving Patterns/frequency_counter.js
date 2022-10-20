// [1, 2, 3] == [1, 4, 9] > True
// [1, 3, 6] == [3,3] > False 
// [1, 1, 2] == [4, 4, 1] > False

const same = (arr1 =[], arr2 = []) => {

    // if not the same length terminate
    if (arr1.length != arr2.length) {
        return false;
    }

    // frequency counters of each element
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let element of arr1){
        frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1
    }

    for(let element of arr2){
        frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1
    }

    for(let key in frequencyCounter1){

        // check if the power of 2 exist
        if(!(key**2 in frequencyCounter2)){
            return false;
        }

        // check the frequency of the element
        if(! (frequencyCounter2[key**2] === frequencyCounter1[key])){
            return false;
        }
    }

    return true;

}

let result = same([1,2,3], [1, 4, 9]);

console.log(result);