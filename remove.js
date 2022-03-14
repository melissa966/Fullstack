//Melissa MEBARKI
var array = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 7, 8];
function remove(array, val) {
  return array.filter(function (i) {
    return i != val;
  });
}

console.log(remove(array, 7));
