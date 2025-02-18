// function areYouPlayingBanjo(name) {
//     if (name[0].toLowerCase() === 'r') {
//         return name + " plays banjo";
//       } else {
//         return name + " does not play banjo";
//       }
// }

// console.log(areYouPlayingBanjo("Rachel"));
// console.log(areYouPlayingBanjo("Mark"));

// const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
// const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
// function chineseZodiac(year) {

//   const cycleYear = year - 1924;
//   const animal = animals[cycleYear % 12];
//   const element = elements[Math.floor((cycleYear % 10) / 2)];
//   return `${element} ${animal}`;
// }

// console.log(chineseZodiac(1998));
// console.log(chineseZodiac(2024));
// console.log(chineseZodiac(1984));

// function getRow(N) {
//   const rowIndex = (N - 1) % 26;
//   const startChar = String.fromCharCode(65 + rowIndex);
//   const remainingPart = String.fromCharCode(65 + rowIndex + 1).padEnd(26 - (rowIndex + 1), '', (i) => String.fromCharCode(65 + i));
//   return repeatingPart + remainingPart;
// }

// function rockPaperScissors(player1, player2) {
//   if (player1 === player2) return "Draw!";
//   if (
//     (player1 === "rock" && player2 === "scissors") ||
//     (player1 === "scissors" && player2 === "paper") ||
//     (player1 === "paper" && player2 === "rock")
//   ) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// }

// function findOutlier(arr) {
//   const majorityIsEven =
//   [arr[0], arr[1], arr[2]].filter(num => num % 2 === 0).length >= 2;
//   return arr.find(num => (num % 2 === 0) !== majorityIsEven);
// }

// const result1 = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
// const result2 = findOutlier([160, 3, 1719, 19, 11, 13, -21]);

// console.log(result1);
// console.log(result2);

// function areAnagrams(str1, str2) {
//   const normalize = (str) => str.toLowerCase().split('').sort().join('');

//   return normalize(str1) === normalize(str2);
// }

// console.log(areAnagrams("foefet", "toffee"));
// console.log(areAnagrams("Buckethead", "DeathCubeK"));
// console.log(areAnagrams("hello", "world"));

// function getPrimes(max) {
//   if (max < 2) return [];
//   const primes = [];
//     for (let num = 2; num <= max; num++) {
//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) primes.push(num);
//     }
//     return primes;
// }

// console.log(getPrimes(11));

// function eqAll(list) {
//   if (list === null || list === undefined) return true;
//   const arr = Array.isArray(list) ? list : [...list];
//   if (arr.length === 0) return true;
//   const firstElement = arr[0];
//   return arr.every(element => element === firstElement);
// }

// function hamming(n) {
//   const factors = [2, 3, 5];
//   const heap = [1];
//   const seen = new Set([1]);

//   let count = 0;
//   while (heap.length) {

//       const smallest = heap.shift();
//       count++;
//       if (count === n) return smallest;

//       for (const factor of factors) {
//           const next = smallest * factor;
//           if (!seen.has(next)) {
//               heap.push(next);
//               seen.add(next);
//           }
//       }

//       heap.sort((a, b) => a - b);
//     }
// }

// console.log(hamming(1));
// console.log(hamming(2));
// console.log(hamming(3));

// function isVampireNumber(fang1, fang2) {
//   const product = fang1 * fang2;
// }

// function balancedParens(n) {
//   const result = [];
//   function generate(current, open, close) {

//     if (open === 0 && close === 0) {
//       result.push(current);
//       return;
//     }

//     if (open > 0) {
//       generate(current + "(", open - 1, close);
//     }

//     if (close > open) {
//       generate(current + ")", open, close - 1);
//     }
//   }

//   generate("", n, n);

//   return result;
// }

// console.log(balancedParens(0));
// console.log(balancedParens(1));
// console.log(balancedParens(2));
// console.log(balancedParens(3));

// function stantonMeasure(arr) {
//   const countOfOnes = arr.filter(num => num === 1).length;
//   const stantonMeasure = arr.filter(num => num === countOfOnes).length;
//   return stantonMeasure;
// }

// console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));
// console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]));

// function Node(data) {
//   this.data = data;
//   this.next = null;
// }

// function push(head, data) {
//   const newNode = new Node(data);
//   newNode.next = head;
//   return newNode;
// }

// function buildOneTwoThree() {
//   let head = null;
//   head = push(head, 3);
//   head = push(head, 2);
//   head = push(head, 1);
//   return head;
// }

function generateBC(url, separator) {
  const ignoreWords = [
    "the",
    "of",
    "in",
    "from",
    "by",
    "with",
    "and",
    "or",
    "for",
    "to",
    "at",
    "a",
  ];
  url = url.split(/[?#]/)[0];
  let parts = url.replace(/https?:\/\//, "").split("/");
  parts.shift();

  const last = parts[parts.length - 1];
  if (/^index\.(html|htm|php|asp)$/i.test(last)) {
    parts.pop();
  }

  let breadcrumb = [`<a href="/">HOME</a>`];

  let path = "";
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const isLast = i === parts.length - 1;

    let text = part
      .replace(/\.[^/.]+$/, "")
      .replace(/[-_]/g, " ")
      .toUpperCase();
  }

  if (text.length > 30) {
    // Acronymize long segments
    text = part
      .split("-")
      .filter((word) => !ignoreWords.includes(word))
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  if (isLast) {
    breadcrumb.push(`<span class="active">${text}</span>`);
  } else {
    path += `/${part}/`;
    breadcrumb.push(`<a href="${path}">${text}</a>`);
  }
}

function solve(inputString) {
  const charPositions = {};

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (!charPositions[char]) {
      charPositions[char] = { first: i, last: i };
    } else {
      charPositions[char].last = i;
    }
  }

  let maxDifference = -1;
  let mostValuableChar = "";

  for (const char in charPositions) {
    const { first, last } = charPositions[char];
    const difference = last - first;

    // Update the most valuable character based on the problem rules
    if (
      difference > maxDifference ||
      (difference === maxDifference && char < mostValuableChar)
    ) {
      maxDifference = difference;
      mostValuableChar = char;
    }
  }

  return mostValuableChar;
}

function knapsack(scores, weights, capacity) {
  const n = scores.length;

  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          scores[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const scores = [15, 10, 9, 5];
const weights = [1, 5, 3, 4];
const capacity = 8;

const maxScore = knapsack(scores, weights, capacity);
console.log("Maximum Score:", maxScore);

function convertMpgToKpl(mpg) {
  const milesToKilometers = 1.609344;
  const gallonToLiters = 4.54609188;
  const kpl = (mpg * milesToKilometers) / gallonToLiters;
  return parseFloat(kpl.toFixed(2));
}
