/* Given an unsorted array, create a function that returns the nth smallest element 
(the smallest element is the first smallest, the second smallest element is the second smallest, etc). 
- nthSmallest([1, 3, 5, 7], 1) ➞ 1
- nthSmallest([1, 3, 5, 7], 3) ➞ 5
- nthSmallest([1, 3, 5, 7], 5) ➞ null
*/

const nthSmallest = (arr, n) => {
  const orderedArray = arr.sort();
  if (arr.length < n) {
    return null;
  }
  return orderedArray[n - 1];
};

console.log(nthSmallest([1, 3, 5, 7], 1)); // should return 1
console.log(nthSmallest([7, 5, 3, 1], 2)); // should return 3
console.log(nthSmallest([1, 9, 3, 2], 10)); // should return NULL, since given n > size of array
