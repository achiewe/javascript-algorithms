function vaporwave(sentence) {
    return sentence
        .toUpperCase()           
        .split('')            
        .filter(char => char !== ' ') 
        .join('  '); 
}