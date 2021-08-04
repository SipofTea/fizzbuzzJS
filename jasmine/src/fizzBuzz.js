class FizzBuzz {
  fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else {
      return number;
    }
  }
}

// To run in the console:
// let fizzBuzz = new FizzBuzz();
// 
// for (let i = 1; i <= 100; i++) {
//   console.log(fizzBuzz.fizzbuzz(i));
// }
