//Sorts the array, finds the index where the number should be inserted and returns that index.
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  
  const index = arr.findIndex(value => num <= value);

  return index === -1 ? arr.length : index;
}
console.log(getIndexToIns([10, 20, 30, 40], 35));
//3
