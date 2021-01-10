function printNumber(start, end) {
  for (let num = start; num <= end; num++) {
    console.log(num);
  }
}

function printNumber(start, end) {
  let num = start;
  while (num <= end) {
    console.log(num);
    num++;
    // num = num + 1;
    // num += 1;
  }
}

printNumber(1, 10);
