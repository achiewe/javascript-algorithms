function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
        return name + " plays banjo";
      } else {
        return name + " does not play banjo";
      }
}

console.log(areYouPlayingBanjo("Rachel")); 
console.log(areYouPlayingBanjo("Mark"));


const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
function chineseZodiac(year) {
 
  const cycleYear = year - 1924;
  const animal = animals[cycleYear % 12];
  const element = elements[Math.floor((cycleYear % 10) / 2)];
  return `${element} ${animal}`;
}

console.log(chineseZodiac(1998));
console.log(chineseZodiac(2024));
console.log(chineseZodiac(1984));

function getRow(N) {
  const rowIndex = (N - 1) % 26;
  const startChar = String.fromCharCode(65 + rowIndex);
  const remainingPart = String.fromCharCode(65 + rowIndex + 1).padEnd(26 - (rowIndex + 1), '', (i) => String.fromCharCode(65 + i));
  return repeatingPart + remainingPart;
} 

function rockPaperScissors(player1, player2) {
  if (player1 === player2) return "Draw!";
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}


function findOutlier(arr) {
  const majorityIsEven = 
  [arr[0], arr[1], arr[2]].filter(num => num % 2 === 0).length >= 2;
  return arr.find(num => (num % 2 === 0) !== majorityIsEven);
}

const result1 = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
const result2 = findOutlier([160, 3, 1719, 19, 11, 13, -21]);

console.log(result1);
console.log(result2);


function areAnagrams(str1, str2) {
  const normalize = (str) => str.toLowerCase().split('').sort().join('');

  return normalize(str1) === normalize(str2);
}


console.log(areAnagrams("foefet", "toffee")); 
console.log(areAnagrams("Buckethead", "DeathCubeK")); 
console.log(areAnagrams("hello", "world")); 

function getPrimes(max) {
  if (max < 2) return []; 
  const primes = [];
    for (let num = 2; num <= max; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
}

console.log(getPrimes(11));


function eqAll(list) {
  if (list === null || list === undefined) return true; 
  const arr = Array.isArray(list) ? list : [...list];
  if (arr.length === 0) return true;
  const firstElement = arr[0];
  return arr.every(element => element === firstElement);
}

function hamming(n) {
  const factors = [2, 3, 5];
  const heap = [1];
  const seen = new Set([1]);

  let count = 0;
  while (heap.length) {
     
      const smallest = heap.shift();
      count++;
      if (count === n) return smallest;

      for (const factor of factors) {
          const next = smallest * factor;
          if (!seen.has(next)) {
              heap.push(next);
              seen.add(next);
          }
      }

      heap.sort((a, b) => a - b);
    }
}

console.log(hamming(1));
console.log(hamming(2)); 
console.log(hamming(3));


function isVampireNumber(fang1, fang2) {
  const product = fang1 * fang2;
}


function balancedParens(n) {
  const result = [];
  function generate(current, open, close) {
   
    if (open === 0 && close === 0) {
      result.push(current);
      return;
    }

   
    if (open > 0) {
      generate(current + "(", open - 1, close);
    }

   
    if (close > open) {
      generate(current + ")", open, close - 1);
    } 
  }

  generate("", n, n);

  return result;
}

console.log(balancedParens(0)); 
console.log(balancedParens(1)); 
console.log(balancedParens(2)); 
console.log(balancedParens(3));

function stantonMeasure(arr) {
  const countOfOnes = arr.filter(num => num === 1).length;
  const stantonMeasure = arr.filter(num => num === countOfOnes).length;
  return stantonMeasure;
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); 
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]));


function Node(data) {
  this.data = data;
  this.next = null;
}


function push(head, data) {
  const newNode = new Node(data);
  newNode.next = head;
  return newNode;      
}

function buildOneTwoThree() {
  let head = null;          
  head = push(head, 3);     
  head = push(head, 2);     
  head = push(head, 1);      
  return head;               
}