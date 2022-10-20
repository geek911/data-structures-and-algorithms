

const validAnagram = (word1, word2) => {

    if(word1.length != word2.length){
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for(let i = 0; i < word1.length; i++){
        frequencyCounter1[i] = frequencyCounter1[i] ? frequencyCounter1[i] + 1 : 0
    }

    for(let i = 0; i < word2.length; i++){
        frequencyCounter2[i] = frequencyCounter2[i] ? frequencyCounter1[i] + 1 : 0
    }


    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(!(frequencyCounter1[key] === frequencyCounter2[key])){
            return false;
        }
    }

    return true;
}

let result = validAnagram("moses", "mssoe");

console.log(result);