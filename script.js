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

  let num = 0;
  tempArr.map((item) => (num += item));
  return getLagrest === num;
}

// console.log(ArraySum([1, 6, 42, 6, 13]));
// console.log(ArraySum([1, 2, 4, 34, 22]));

function unique(str) {
  return new Set(str).size === str.length;

  // let tempStr = new Set();

  // for (let letter of str) {
  //   if (tempStr.has(letter)) {
  //     return false;
  //   }
  //   tempStr.add(letter);
  // }
  // return true;
}

// console.log(unique("abcd"));
// //returns true
// console.log(unique("abbc"));
//return false ad = duplicate

// get unique values in the array

let products = [
  {
    title: "ihone 7",
    company: "apple",
  },

  {
    title: "galaxy",
    company: "samsung",
  },

  {
    title: "iphone 8",
    company: "apple",
  },

  {
    title: "iphone Xs",
    company: "apple",
  },
];

function getUnique(arr) {
  let tempArr = arr.map((item) => item.company);

  return [...new Set(tempArr)];
}

console.log(getUnique(products));
