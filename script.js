function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(longestWord("vaa achi ravaxr"));

function mathSequences(arr) {
  let arithmetic = [];
  let geo = [];

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arithmetic.push(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.push(number2);
  }
  console.log(`A : ${arithmetic}`);
  console.log(`G : ${geo}`);
  // return arr;
}

console.log(mathSequences([2, 4, 6, 8]));
