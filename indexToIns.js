function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
   arr.findIndex(num => num > arr[i]);
  }
}
console.log(getIndexToIns([10, 20, 30, 40], 35));
