

const validAnagram = (word1, word2) => {

    if(word1.length != word2.length){
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for(let char of word1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for(let char of word2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
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