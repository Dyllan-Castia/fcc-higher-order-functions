function destroyer (arr, ...args) {
  const newArr = arr.filter(value => !args.includes(value));
  return newArr;
}
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))
//[12, 92, 65]
