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