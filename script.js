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
  let arithmetic = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arithmetic.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
  }

  if (arithmetic.size === 1) {
    return "Arithmetic";
  }
  if (geo.size === 1) {
    return "geo";
  }

  return -1;
}

console.log(mathSequences([2, 4, 6, 8]));
