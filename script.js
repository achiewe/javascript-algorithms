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

// Palindrome Checker

function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the string is equal to its reverse
  return str === str.split("").reverse().join("");
}

// test cases
const testStrings = [
  "racecar",
  "RaceCar",
  "race CAR",
  "2A3*3a2",
  "2A3 3a2",
  "2_A3*3#A2",
];

// isterate through test strings and log the result
testStrings.forEach((testString) => {
  console.log(`${testString}: ${isPalindrome(testString)}`);
});

// Telephone Number Validator
function telephoneCheck(str) {
  // egular expression to match valid US phone numbers
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");

// Cash Register

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;

  let totalCashInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0);

  const currencyUnits = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  const roundToTwoDecimalPlaces = (num) => Math.round(num * 100) / 100;

  const getCashFromDrawer = (currency) => {
    let currencyIndex = cid.findIndex((item) => item[0] === currency);
    return currencyIndex !== -1 ? cid[currencyIndex][1] : 0;
  };

  let change = [];

  for (let i = cid.length - 1; i >= 0; i--) {
    let currencyName = cid[i][0];
    let currencyValue = currencyUnits[currencyName];
    let currencyAvailable = cid[i][1];
    let currencyCount = Math.floor(currencyAvailable / currencyValue);

    let currencyUsed =
      Math.min(currencyCount, Math.floor(changeDue / currencyValue)) *
      currencyValue;
    currencyUsed = roundToTwoDecimalPlaces(currencyUsed);

    changeDue = roundToTwoDecimalPlaces(changeDue - currencyUsed);
    totalCashInDrawer = roundToTwoDecimalPlaces(
      totalCashInDrawer - currencyUsed
    );

    if (currencyUsed > 0) {
      change.push([currencyName, currencyUsed]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCashInDrawer === 0) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPEN", change: change };
  }
}

const result = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
// console.log(result);

// Sorted Union
function uniteUnique() {
  let uniqueArray = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!uniqueArray.includes(arguments[i][j])) {
        uniqueArray.push(arguments[i][j]);
      }
    }
  }
  return uniqueArray;
}
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Spinal Tap Case
function spinalCase(str) {
  str = str.replace(/_/g, "-").replace(/\s+/g, "-");
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");

  str = str.toLowerCase();

  return str;
}

// console.log(spinalCase("This Is Spinal Tap"));

// Wherefore art thou
function whatIsInAName(collection, source) {
  return collection.filter((obj) => {
    return Object.keys(source).every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

// return
function add(a, b) {
  return a + b;
}

function subt(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
}

function integerDivide(a, b) {
  if (b !== 0) {
    return Math.floor(a / b);
  } else {
    return "Cannot divide by zero!";
  }
}

function mod(a, b) {
  if (b !== 0) {
    return a % b;
  } else {
    return "Cannot divide by zero!";
  }
}

function exponent(a, b) {
  return Math.pow(a, b);
}

const num1 = 10;
const num2 = 5;

// console.log("Addition:", add(num1, num2));
// console.log("Subtraction:", subt(num1, num2));
// console.log("Multiplication:", multiply(num1, num2));
// console.log("Float Division:", divide(num1, num2));
// console.log("Integer Division:", integerDivide(num1, num2));
// console.log("Modulus:", mod(num1, num2));
// console.log("Exponentiation:", exponent(num1, num2));

//function to reverse middle elements of an array
function reverseMiddle(array) {
  if (array.length < 4) {
    return "Array should have at least four elements!";
  }

  const middleIndex = Math.floor(array.length / 2);
  let reverseMiddleElements = [];

  if (array.length % 2 === 0) {
    reverseMiddleElements.push(array[middleIndex]);
    reverseMiddleElements.push(array[middleIndex - 1]);
  } else {
    reverseMiddleElements.push(array[middleIndex + 1]);
    reverseMiddleElements.push(array[middleIndex]);
    reverseMiddleElements.push(array[middleIndex - 1]);
  }
  return reverseMiddleElements;
}

const inputArray = [1, 2, 3, 4, 5];
// console.log(reverseMiddle(inputArray));

// function to determine if the year was naughty or nice
function naughtyOrNice(data) {
  let naughtyCount = 0;
  let niceCount = 0;

  for (const month in data) {
    for (const day in data[month]) {
      if (data[month][day] === "Naughty") {
        naughtyCount++;
      } else if (data[month][day] === "Nice") {
        niceCount++;
      }
    }
  }

  if (naughtyCount > niceCount) {
    return "Naughty!";
  } else if (niceCount > naughtyCount) {
    return "Nice!";
  } else {
    return "Nice!";
  }
}

const yearData = {
  January: {
    1: "Naughty",
    2: "Naughty",
    3: "Nice",
    4: "Nice",
    5: "Nice",
    6: "Naughty",
    7: "Naughty",
    8: "Nice",
    9: "Nice",
    10: "Nice",
    11: "Nice",
    12: "Naughty",
    13: "Naughty",
    14: "Naughty",
    15: "Naughty",
    16: "Naughty",
    17: "Naughty",
    18: "Nice",
    19: "Nice",
    20: "Nice",
    21: "Nice",
    22: "Nice",
    23: "Nice",
    24: "Nice",
    25: "Nice",
    26: "Nice",
    27: "Nice",
    28: "Nice",
    29: "Nice",
    30: "Nice",
    31: "Nice",
  },
  February: {
    1: "Nice",
    2: "Nice",
    3: "Nice",
    4: "Nice",
    5: "Nice",
    6: "Nice",
    7: "Nice",
    8: "Nice",
    9: "Nice",
    10: "Nice",
    11: "Nice",
    12: "Nice",
    13: "Nice",
    14: "Nice",
    15: "Nice",
    16: "Nice",
    17: "Nice",
    18: "Nice",
    19: "Nice",
    20: "Nice",
    21: "Nice",
    22: "Nice",
    23: "Nice",
    24: "Nice",
    25: "Nice",
    26: "Nice",
    27: "Nice",
    28: "Nice",
  },
};

// console.log(naughtyOrNice(yearData));

//  function to remove the smallest value from an array
function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);
  const result = numbers.slice(0, index).concat(numbers.slice(index + 1));

  return result;
}

// console.log(removeSmallest([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5]
// console.log(removeSmallest([5, 3, 2, 1, 4])); // Output: [5, 3, 2, 4]
// console.log(removeSmallest([2, 2, 1, 2, 1])); // Output: [2, 2, 2, 1]

// function to calculate how many cigarettes Timothy can smoke
function startSmoking(bars, boxes) {
  const totalCigarettes = bars * 10 * 18 + boxes * 18;

  let smokedCigarettes = totalCigarettes;
  while (smokedCigarettes >= 5) {
    const stubs = Math.floor(smokedCigarettes / 5);
    smokedCigarettes -= stubs * 5;
    smokedCigarettes += stubs;
  }

  return smokedCigarettes;
}

// console.log(startSmoking(2, 3));

// simple missing sum
function solve(arr) {
  arr.sort((a, b) => a - b);

  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= result) {
      result += arr[i];
    } else {
      break;
    }
  }

  return result;
}

// console.log(solve([1, 2, 8, 7]));
// console.log(solve([4, 1, 2, 3, 12]));
// console.log(solve([2, 3, 2, 3, 4, 2, 12, 3]));

// Begin your day with a challenge, but an easy one.
function oneTwoThree(n) {
  let firstPart = n.toString();
  let secondPart = "";
  for (let i = 0; i < n; i++) {
    secondPart += "1";
  }
  return [firstPart, secondPart];
}

// console.log(oneTwoThree(0)); // ['0', '0']
// console.log(oneTwoThree(1)); // ['1', '1']
// console.log(oneTwoThree(3)); // ['3', '111']
// console.log(oneTwoThree(19)); // ['991', '1111111111111111111']

// longest palindrome
function longestPalindrome(str) {
  str = str.toLowerCase();

  const charCount = {};

  for (let char of str) {
    if (/^[a-zA-Z0-9]$/.test(char)) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  let oddFound = false;
  let length = 0;

  for (let count of Object.values(charCount)) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1;
      if (!oddFound) {
        oddFound = true;
      }
    }
  }

  if (oddFound) {
    length += 1;
  }

  return length;
}

// console.log(longestPalindrome("Hannah")); // 6
// console.log(longestPalindrome("aabbcc_yYx_")); // 9

//
function countTimeLoops(menu, a, b) {
  menu.sort((a, b) => a - b);
  let uniqueCombos = new Set();

  function generateCombos(start, total, combo) {
    if (total >= a && total <= b) {
      uniqueCombos.add(combo.join());
    }

    for (let i = start; i < menu.length; i++) {
      if (i > start && menu[i] === menu[i - 1]) continue;

      generateCombos(i + 1, total + menu[i], combo.concat(menu[i]));
    }
  }

  generateCombos(0, 0, []);

  return BigInt(uniqueCombos.size);
}

// const menu = [2, 3, 5];
// const a = 5;
// const b = 10;
// console.log(countTimeLoops(menu, a, b));

// function the_bee
function theBee(n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + (i > 2 ? dp[i - 3] : 0);
  }

  return dp[n];
}

// console.log(the_bee(2)); // Output: 11
// console.log(the_bee(3)); // Output: 291
// console.log(the_bee(5)); // Output: 259123

function incrementString(strng) {
  let match = strng.match(/(.*?)(\d*)$/);

  let prefix = match[1] || "";
  let suffix = match[2] || "";

  if (suffix === "") {
    return prefix + "1";
  }

  let num = parseInt(suffix) + 1;

  let newSuffix = num.toString().padStart(suffix.length, "0");

  return prefix + newSuffix;
}

// console.log(incrementString("foo")); // Output: foo1
// console.log(incrementString("foobar23")); // Output: foobar24
// console.log(incrementString("foo0042")); // Output: foo0043
// console.log(incrementString("foo9")); // Output: foo10
// console.log(incrementString("foo099")); // Output: foo100

//Numbers and its Reversal Having Same Prime Factors.
function isPalindrome(num) {
  const numStr = num.toString();
  return numStr === numStr.split("").reverse().join("");
}

function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}
function sameFactRev(nMax) {
  const result = [];

  for (let i = 10; i < nMax; i++) {
    if (!isPalindrome(i)) {
      const rev = parseInt(i.toString().split("").reverse().join(""));
      if (!isPalindrome(rev)) {
        const factors1 = primeFactors(i).sort().join("");
        const factors2 = primeFactors(rev).sort().join("");
        if (factors1 === factors2 && !result.includes(i)) {
          result.push(i);
        }
      }
    }
  }

  return result;
}

// console.log(sameFactRev(1100)); // Output: [1089]
// console.log(sameFactRev(2500)); // Output: [1089, 2178]

// ROT13
function rot13(str) {
  return str.replace(/[A-Za-z]/g, function (char) {
    var charCode = char.charCodeAt(0);
    var baseCharCode = char <= "Z" ? 65 : 97;
    return String.fromCharCode(
      ((charCode - baseCharCode + 13) % 26) + baseCharCode
    );
  });
}

// console.log(rot13("EBG13 rknzcyr.")); // ROT13 example.
// console.log(rot13("Guvf vf zl svefg EBG13 rkprepvfr!")); // This is my first ROT13 exercise!

function solequa(n) {
  const result = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      const j = n / i;
      const x = (i + j) / 2;
      const y = (j - i) / 4;

      if (Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0) {
        result.push([x, y]);
      }
    }
  }

  result.sort((a, b) => b[0] - a[0]);

  return result;
}

// luck check
function luckCheck(ticket) {
  if (!ticket || isNaN(ticket)) {
    throw new Error(
      "input must be a non-empty string representing a decimal number"
    );
  }

  const length = ticket.length;
  const halfLength = Math.floor(length / 2);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < halfLength; i++) {
    leftSum += parseInt(ticket[i]);
    rightSum += parseInt(ticket[length - 1 - i]);
  }

  return leftSum === rightSum;
}

// funtion wave
function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return result;
}

// console.log(wave("hello"));

const getNumberOfWays = (steps, maxJumpLength) => {
  if (steps === 1) return BigInt(1);

  const dp = new Array(steps + 1).fill(BigInt(0));
  dp[0] = BigInt(1);

  for (let i = 1; i <= steps; i++) {
    for (let j = 1; j <= maxJumpLength && j <= i; j++) {
      dp[i] += dp[i - j];
    }
  }
  return dp[steps];
};

// console.log(getNumberOfWays(3, 3)); // Output: 4
// console.log(getNumberOfWays(4, 3)); // Output: 7

// duplicate arguments

function solution() {
  const args = Array.from(arguments);
  const seen = new Set();

  for (let arg of args) {
    if (seen.has(arg)) {
      return true;
    }
    seen.add(arg);
  }
  return false;
}

// console.log(solution(1, 2, 3)); // Output: false
// console.log(solution(1, 2, 3, 2)); // Output: true
// console.log(solution("1", "2", "3", "2")); // Output: true

function arrange(s) {}
