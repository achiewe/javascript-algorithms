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
  // let tempArr = arr.map((item) => item.company);

  // return [...new Set(tempArr)];

  return [
    ...arr.reduce((acc, current) => {
      acc.add(current.company);
      return acc;
    }, new Set()),
  ];
}

// console.log(getUnique(products));

function secondValue(arr) {
  let values = [...new Set(arr)].sort((a, b) => a - b);
  if (values.length < 2) {
    return `${values[0]}`;
  } else if (values.length === 2) {
    return `${values[0]} ${values[1]}`;
  } else {
    return `${values[1]} ${values[values.length - 2]}`;
  }
}

// console.log(secondValue([1]));
// console.log(secondValue([4, 2]));
// console.log(secondValue([11, 44, 22]));
// console.log(secondValue([3, 2, 88, 3, -11]));

// return number with most repeats
function testRepeat(arr) {
  let max = 1;
  let position = 0;
  let value = -1;

  let tempNumb = arr.reduce((acc, curr, index) => {
    acc[curr] = acc[curr]
      ? { ...acc[curr], amount: acc[curr]["amount"] + 1 }
      : { amount: 1, index };

    let amount = acc[curr].amount;
    let place = acc[curr].index;
    if (amount > max || (amount === max && place <= position && amount > 1)) {
      max = amount;
      value = curr;
      position = place;
    }

    return acc;
  }, {});
  return value;
}

// console.log(testRepeat([5, 2, 2, 1, 5]));
// //return 5
// console.log(testRepeat([6, 5, 5, 10, 10, 10]));
// //return 10;
// console.log(testRepeat([3, 4, 1, 6, 10]));
// //return -1;

// prime number = can only divide evenly by itself or one
// 11 / 2 = 5.5

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  // modulus %

  let root = Math.ceil(Math.sqrt(num));
  console.log(root);

  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(8));
// //false
// console.log(isPrime(11));
// //true
// console.log(isPrime(121));
// //false
// console.log(isPrime(127));
// //true

// dot notation
const person = {
  name: "john",
};

console.log(person.name);
console.log(person);

//square brackets notation
const items = {
  "featire-items": ["item1", "item2"],
};

let appState = "loading";
appState = "error";

const keyName = "computer";

const app = {
  [appState]: true,
};

app[keyName] = "apple";

console.log(app);
