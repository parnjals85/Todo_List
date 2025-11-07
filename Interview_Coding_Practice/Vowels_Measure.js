function vowels(str){
    let count = 0;
    const vowels = 'aeiouAEIOU';

    for(let i = 0 ; i< str.length ; i++){
        if(vowels.includes(str[i]))
            count ++;
    }
    return count;
}

console.log(vowels('Pranjal'))
console.log(vowels('Chinmaya'))
console.log(vowels('Sudeeep'))
console.log(vowels('Prakta'));