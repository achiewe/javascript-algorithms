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


const samurai = [ 
  {name: "Yagyu", weapon: "shuriken"}, 
  {name: "Yoshi", weapon: "katana"}, 
  {name: "Kuma", weapon: "wakizashi"} 
  ]; 
  const weapons = []; 
  samurai.forEach(samurai => { 
  weapons.push(samurai.weapon); 
  }); 
  assert(weapons[0] === "shuriken" 
  && weapons[1] === "katana" 
  && weapons[2] === "wakizashi" 
  && weapons.length === 3, 
  "The new array contains all weapons");

