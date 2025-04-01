// correction task

function findLargestNumber(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= c) {
      return b;
    } else {
      return c;
    }
  }
  console.log(findLargestNumber(12, 25, 7));  
  console.log(findLargestNumber(5, 9, 11));   