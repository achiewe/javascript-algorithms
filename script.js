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

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}
updateState("name", "john");
updateState("name", "developer");
updateState("loading", false);
updateState("producets", []);
updateState("name", "peter");
// console.log(state);

// reduce to single value - number, array, object
const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100 },
  { name: "peter", age: 23, position: "designer", salary: 200 },
  { name: "george", age: 22, position: "boss", salary: 300 },
  { name: "bobby", age: 25, position: "intern", salary: 400 },
];

const dailyTotal = staff.reduce((total, person) => {
  console.log(total);
  console.log(person.salary);
  total += person.salary;
  return total;
}, 0);

// console.log(dailyTotal);

function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }

  return sum;
}

// console.log(sumAll([4, 4]));

function diffArray(arr1, arr2) {
  const union = new Set([...arr1, ...arr2]);

  const symDiff = [];
  for (const currentEl of union) {
    if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
      symDiff.push(currentEl);
    } else if (arr2.includes(currentEl) && !arr1.includes(currentEl)) {
      symDiff.push(currentEl);
    }
  }

  return symDiff;
}

// console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));

function smallestCommons(arr) {
  let small = arr[0] > arr[1] ? arr[1] : arr[0];
  let big = arr[0] > arr[1] ? arr[0] : arr[1];

  let scm = big;
  while (true) {
    let isScm = true;
    for (let i = small; i <= big; i++) {
      if (scm % i != 0) {
        isScm = false;
        break;
      }
    }

    if (isScm) {
      return scm;
    } else {
      scm++;
    }
  }
}

// console.log(smallestCommons([1, 5]));
// smallestCommons

function dropElements(arr, func) {
  let trueIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (func(el)) {
      trueIndex = i;
      break;
    }
  }

  if (trueIndex === -1) {
    return [];
  } else {
    return arr.slice(trueIndex);
  }
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});

// caesars cipher, freecodecamp challenge

const A_CODE = "A".charCodeAt(0);

function rot13(str) {
  let output = "";

  for (const c of str) {
    if (!/[A-Z]/.test(c)) {
      output += c;
    } else {
      let code = c.charCodeAt(0);
      code -= 13;
      if (code > A_CODE) {
        code += 26;
      }
      output += String.fromCharCode(code);
    }
  }
  return output;
}

// console.log(rot13("BSERR PBQR PNZC"));

function bubbleSort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [[arr[j]], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(
//   bubbleSort([1, 4, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234])
// );

function pairElement(str) {
  const output = [];
  for (const c of str) {
    if (c === "A") {
      output.push([c, "T"]);
    } else if (c === "T") {
      output.push([c, "A"]);
    } else if (c === "C") {
      output.push([c, "G"]);
    } else if (c === "G") {
      output.push([c, "C"]);
    }
  }
  return output;
}

// console.log(pairElement("GCG"));

function sumFibs(num) {
  let a = 1;
  let b = 1;

  let sum = a;

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b;
    }
    let temp = b;
    b = a + b;
    a = temp;
  }
  return sum;
}

// console.log(sumFibs(4));

function truthCkeck(coll, pre) {
  let isTurthy = true;
  for (const obj of coll) {
    if (!obj[pre]) {
      return false;
    }
  }
  return isTurthy;
}

// console.log(
//   truthCkeck([
//     { user: "tinky-Winky", sex: "male" },
//     { user: "Dipsy", sex: "male" },
//     { user: "Laa-Laa", sex: "female" },
//     { user: "Po", sex: "female" },
//   ])
// );

const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const converter = {
  1: "I",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

function convertRoman(num) {
  let output = "";
  let i = 0;

  while (num > 0) {
    const subtract = numbers[i];
    if (subtract > num) {
      i++;
    } else {
      num -= subtract;
      output += converter[subtract];
    }
  }
  return output;
}

// console.log(convertRoman(36));

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map((obj) => {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
      ),
    };
  });
}

// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));

function climbingStaircase(n) {
  const nOfWays = [1, 2];
  for (i = 2; i <= n; i++) {
    nOfWays[i] = nOfWays[i - 1] + nOfWays[i - 2];
  }
  return nOfWays[n - 1];
}

// console.log(climbingStaircase(1));
// console.log(climbingStaircase(2));
// console.log(climbingStaircase(3));
// console.log(climbingStaircase(4));
// console.log(climbingStaircase(5));

var chunk = function (arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
};

function objDiff(o1, o2) {
  if (!isObject(o1) && !isObject(o2)) {
    return o1 === o2 ? {} : [o1, o2];
  }

  if (!isObject(o1) || !isObject(o2)) {
    return [o1, o2];
  }

  if (Array.isArray(o1) !== Array.isArray(o2)) {
    return [o1, o2];
  }

  const diff = {};

  for (const key in o1) {
    if ((o1, hasOwnProperty(key))) {
      const res = objDiff(o1[key], o2[key]);
      if (Object.keys(res).length > 0) {
        diff[key] = res;
      }
    }
  }

  return diff;
}

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
