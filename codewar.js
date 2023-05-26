const arrayDifference = (array1, array2) => {
  result = array1.filter((item) => !array2.includes(item));
  return result;
};

const a = [1, 2,, 10,  3, 4, 5];
const b = [3, 4, 5, 6, 7];


const checkDiffernce = arrayDifference(a, b)
console.log(checkDiffernce)