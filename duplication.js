//Melissa MEBARKI
var array = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 7, 8];
function duplication(array) {
  let i = 0;
  let array1 = [];
  while (i < array.length) {
    if (array[i] < array[i + 1]) {
      array1.push(array[i]);
    } else if (i === array.length - 1) {
      array1.push(array[i]);
    }
    i++;
  }
  return array1;
}

console.log(duplication(array));
