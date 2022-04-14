function removeMatching(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++)
    if (arr.includes(arr[i] * -1)) {
      continue;
    } else newArr.push(arr[i]);

  return new Set(newArr);
}
let arr1 = [1, -1, 2, -2, 3];
let arr2 = [-3, 1, 2, 3, -1, -4, -2];

console.log(removeMatching(arr1));
