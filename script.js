// function findDifferentElements(array1, array2) {
//   const set1 = new Set(array1.map((obj) => obj.string_list_data[0].href));
//   const set2 = new Set(array2.map((obj) => obj.string_list_data[0].href));

//   const uniqueToObj1 = array1.filter(
//     (obj) => !set2.has(obj.string_list_data[0].href)
//   );
//   const uniqueToObj2 = array2.filter(
//     (obj) => !set1.has(obj.string_list_data[0].href)
//   );

//   return uniqueToObj1.concat(uniqueToObj2);
// }

// const differentElements = findDifferentElements(obj1, obj2);

// const stringListDataArray = differentElements.map(
//   (obj) => obj.string_list_data
// );

// console.log(stringListDataArray);

// function ways(n, k) {
//   const MOD = 1000000007n;

//   if (n === 1n) return k % MOD;
//   if (n === 2n) return (k * k) % MOD;

//   let same = k % MOD;
//   let diff = (k * (k - 1n)) % MOD;
//   for (let i = 3n; i <= n; i++) {
//     let temp = diff;
//     diff = ((diff + same) * (k - 1n)) % MOD;
//     same = temp;
//   }

//   return (same + diff) % MOD;
// }



const x = new Map();
const y = new Set();

const obj = {
    'x': 8,
    x: 8,
    8: 'smth',
    [Symbol]: 'smth',
    y:"8",
   
 };


const z = new WeakMap();
const b = new WeakSet();

for(let i=1; i<5; i++){
  console.log(i)
}


const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"]; 
delete ninjas[1];
console.log(1, "mevar pirvel indexze") 

const injas = ["Yagyu", "Kuma", "Hattori"]; 
for(let i = 0; i < injas.length; i++){ 
assert(injas[i] !== null, ninjas[i]); 
}

const soroi = [ 
  {name: "Yagyu", weapon: "shuriken"}, 
  {name: "Yoshi" }, 
  {name: "Kuma", weapon: "wakizashi"} 
  ]; 
  const ninjaWithWakizashi = soroi.find(soroi => { 
  return soroi.weapon === "wakizashi"; 
  }); 
  assert(ninjaWithWakizashi.name === "Kuma" 
  && ninjaWithWakizashi.weapon === "wakizashi", 
  "Kuma is wielding a wakizashi");

const ninjaWithKatana = soroi.find(soroi => { 
  return soroi.weapon === "katana"; 
  }); 
  assert(ninjaWithKatana === undefined, 
  "We couldn't find a ninja that wields a katana"); 
  const armedNinjas = soroi.filter(soroi => "weapon" in soroi); 
  assert(armedNinjas.length === 2, "There are two armed ninjas:"); 
  assert(armedNinjas[0].name === "Yagyu" 
  && armedNinjas[1].name === "Kuma", "Yagyu and Kuma"); 


  // add the sum and number variable in the script js file 
  const numbers = [1, 2, 3, 4]; 
  const sum = numbers.reduce((aggregated, number) => 
  aggregated + number, 0); 
  assert(sum === 10, "The sum of first four numbers is 10")
  const array = [2, 3, 4, 5];
  const sre = {
    file:"pdf",
    content:"detective",
    sign:"main",
  }

const numbersSum = 4 + 2300;
const numSum = 240 + 500;
let organicNum = 500 + 600;
let positiveNum = 400 + 250;
let allNum = organicNum + positiveNum;
const finalResult = allNum + numSum;

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let reversedString = reverseArray.join("");
  return reversedString;
}
let originalString = "hello";

function randomNumbers(size, min, max) {
  const numbers = Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  console.log("Random Numbers:", numbers);

  const sorted = [...numbers].sort((a, b) => a - b);
  console.log("Sorted Numbers:", sorted);

  const average = sorted.reduce((acc, num) => acc + num, 0) / sorted.length;
  console.log("Average:", average);
}

randomNumbers(5, 1, 50);

function square(num) {
  return num * num;
}

console.log(square(4)); 

const isEven = num => num % 2 === 0;


function sum(a, b) {
  return a + b;
}



function findMax(arr) {
  return Math.max(...arr);
}


const sentence = "hello world from javascript";
const words = sentence.split(" ");
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  capitalizedWords.push(words[i][0].toUpperCase() + words[i].slice(1));
}
const result = capitalizedWords.join(" ");
console.log(result); 

function removeItems(arr, startIndex, deleteCount) {
 const removedItems = arr.splice(startIndex, deleteCount);
 return removedItems;
}

const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
const removedFruits = removeItems(fruits, 1, 2);
console.log(removedFruits); 
console.log(fruits);  


function generateRandomPassword(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

const randomPassword = generateRandomPassword(12); // Generate a 12-character random password
console.log("Your random password is:", randomPassword);


function calculateArea(length, width) {
  
  let area = length * width;

  if (area > 50) {
      console.log("The area is large: " + area + " square units.");
  } else {
      console.log("The area is small: " + area + " square units.");
  }

  return area;
}


const numseb = [10, 5, 8, 22, 17, 3, 15];
let maxNumber = numbers[0];


for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log("The largest number is:", maxNumber);

function snailWillReachEnd(x, y, z) {
  const minutesInYear = 525600;
  let snailPosition = 0;  
  let totalLength = x; 
  
  for (let minute = 1; minute <= minutesInYear; minute++) {
    snailPosition += (y / totalLength) * totalLength;
    if (snailPosition >= totalLength) {
        return true;
    }

   
    totalLength += z;
}


return false;

}


console.log(snailWillReachEnd(10, 2, 1));        
console.log(snailWillReachEnd(100, 1, 2));       
console.log(snailWillReachEnd(100000, 0.1, 0.05));

function nextHappyYear(year) {
  const hasDistinctDigits = (year) => {
    const yearStr = year.toString();
    const yearSet = new Set(yearStr);
    return yearStr.length === yearSet.size;
  };

  year++;

  while (!hasDistinctDigits(year)) {
    year++;
  }

  return year;
}

console.log(nextHappyYear(7712)); 
console.log(nextHappyYear(8989)); 
console.log(nextHappyYear(1001));


function trilingualDemocracy(languages) {
  const counts = {
    D: 0, 
    F: 0, 
    I: 0, 
    K: 0 
  }

  for (let lang of languages) {
    counts[lang]++;
  }

  if (counts.D === 3 || counts.F === 3 || counts.I === 3 || counts.K === 3) {
    return languages[0]; 
  }

  for (let lang in counts) {
    if (counts[lang] === 1) {
      return lang; 
    }
  }

    if (counts.D === 1 && counts.F === 1 && counts.I === 1) {
    return 'K';
  } else if (counts.D === 1 && counts.F === 1 && counts.K === 1) {
    return 'I';
  } else if (counts.D === 1 && counts.I === 1 && counts.K === 1) {
    return 'F'; 
  } else if (counts.F === 1 && counts.I === 1 && counts.K === 1) {
    return 'D'; 
  }
}