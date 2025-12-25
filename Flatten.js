//Takes an array of arrays and combines all values into 1 array.
function steamrollArray(arr) {
  const result = [];

  function flatten(value) {
    if (Array.isArray(value)) {
      for (let item of value) {
        flatten(item);
      }
    } else {
      result.push(value);
    }
  }

  flatten(arr);
  return result;
}
