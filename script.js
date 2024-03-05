// take longest word

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

// math sequences
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
    return "Geometric";
  }

  return -1;
}

// console.log(mathSequences([10, 20, 30, 40]));

// counting letters
function countLetter(str) {
  let tempArr = str.split(" ");
  temp = tempArr.map((item) => {
    let tempItem = item.toLowerCase().split("");
    return tempItem.reduce(
      (acc, current) => {
        acc[current] = acc[current] ? acc[current] + 1 : 1;
        if (acc[current] > acc.max) {
          acc.max = acc[current];
        }
        return acc;
      },
      { max: 1, word: item }
    );
  });

  let amount = 1;
  let word = "";
  for (let item of tempArr) {
    if (item.max > amount) {
      amount = item.max;
      word = item.word;
    }
  }

  if (amount > 1) {
    return word;
  }
  return -1;
}

// console.log(countLetter("whats up guys  1121"));

// array sum

function ArraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });

  let getLagrest = tempArr.pop();

  return getLagrest;
}

console.log(ArraySum([1, 6, 42, 6, 13]));
console.log(ArraySum([1, 2, 4, 34, 22]));
