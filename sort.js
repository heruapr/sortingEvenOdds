function sortEvenOddDesc(arr) {
  const evens = arr.filter((num) => num % 2 === 0);
  const odds = arr.filter((num) => num % 2 !== 0);

  evens.sort((a, b) => b - a);
  odds.sort((a, b) => b - a);

  return evens.concat(odds);
}

const inputArray = [3, 2, 5, 1, 8, 9, 6];
const sortedArray = sortEvenOddDesc(inputArray);
console.log(sortedArray);
