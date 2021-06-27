// array1 = [0,3,4,31]
//array2 = [4,6,30]
//mergeSortedArray = [0,3,4,4,6,30,31]
//Time O(n1 + n2), Space O(n1+n2)
function mergeSortedArray(array1: Array<number>, array2: Array<number>) {
  const mergedArray: number[] = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }
  return mergedArray;
}

console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArray([0, 3, 4, 31], [4, 6,30, 31,62]));
