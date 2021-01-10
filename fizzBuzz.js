let num = [];

while (num <= 100) {
  if (num % 3 == 0) {
    console.log('fizz');
  } else if (num % 5 == 0) {
    console.log('Buzz');
  } else if (num % 3 && num % 5 == 0) {
    console.log('fizzBUzz');
  } else {
    count++;
  }
}
console.log(num);
