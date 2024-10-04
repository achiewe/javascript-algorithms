function vaporwave(sentence) {
    return sentence
        .toUpperCase()           
        .split('')            
        .filter(char => char !== ' ') 
        .join('  '); 
}

console.log(vaporwave("Lets go to the movies")); 
console.log(vaporwave("Why isn't my code working?"));

function cuckooTime(initial_time, n) {}