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


function example(a, b) {
  console.log(arguments); // shows all arguments passed to the function
  console.log(this);
}

example(1, 2); // calling the function
