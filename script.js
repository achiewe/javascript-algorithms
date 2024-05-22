function findDifferentElements(array1, array2) {
  const set1 = new Set(array1.map((obj) => obj.string_list_data[0].href));
  const set2 = new Set(array2.map((obj) => obj.string_list_data[0].href));

  const uniqueToObj1 = array1.filter(
    (obj) => !set2.has(obj.string_list_data[0].href)
  );
  const uniqueToObj2 = array2.filter(
    (obj) => !set1.has(obj.string_list_data[0].href)
  );

  return uniqueToObj1.concat(uniqueToObj2);
}

const differentElements = findDifferentElements(obj1, obj2);

const stringListDataArray = differentElements.map(
  (obj) => obj.string_list_data
);

console.log(stringListDataArray);

function ways(n, k) {}
