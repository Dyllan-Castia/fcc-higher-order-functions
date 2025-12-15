//returns the symetric difference of the two arrays.
function diffArray(arr1, arr2) {
    
    const newArr1 = arr1.filter(value => !arr2.includes(value));

    const newArr2 = arr2.filter(value => !arr1.includes(value));

  const symDiff = newArr1.concat(newArr2);
  
  return symDiff
}
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
//["pink wool", "diorite"]
