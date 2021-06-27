//Question. write a function that return true if any element of array1 common in array2 else return false
// solution 1:- time complexity O(n^2) and space complexity O(1)
function findCommonElements1(array1: string[], array2: string[]): boolean {
  for (let elementofArray1 of array1) {
    for (let elementofArray2 of array2) {
      if (elementofArray1 === elementofArray2) {
        return true;
      }
    }
  }
  return false;
}
//solution 2:- time complexity O(n) and space complexity O(n)
function findCommonElements2(array1: string[], array2: string[]): boolean {
  let map = {};
  for (let item of array1) {
    map[item] = true;
  }
  for (let item of array2) {
    if (map[item]) {
      return true;
    }
  }
  return false;
}
//function calling
const array1 = ["a", "b", "c", "d"];
const array2 = ["x", "y", "a", "z", "p"];
console.log(findCommonElements1(array1, array2));
console.log(findCommonElements2(array1, array2));
