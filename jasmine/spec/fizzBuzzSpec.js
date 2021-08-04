describe("FizzBuzz tests", function() {
  const fizzparameters = [
    { description: "Should fizz for 3", input: 3, result: "Fizz"},
    { description: "Should fizz for 6", input: 6, result: "Fizz"},
    { description: "Should fizz for 9", input: 9, result: "Fizz"},
    { description: "Should fizz for 12", input: 12, result: "Fizz"},
    { description: "Should fizz for 18", input: 18, result: "Fizz"},
  ]
  const buzzparameters = [
    { description: "Should buzz for 5", input: 5, result: "Buzz"},
    { description: "Should buzz for 10", input: 10, result: "Buzz"},
    { description: "Should buzz for 20", input: 20, result: "Buzz"},
    { description: "Should buzz for 25", input: 25, result: "Buzz"},
  ]
  const fizzbuzzparameters = [
    { description: "Should fizzbuzz for 15", input: 15, result: "FizzBuzz"},
    { description: "Should fizzbuzz for 30", input: 30, result: "FizzBuzz"},
    { description: "Should fizzbuzz for 60", input: 60, result: "FizzBuzz"},
    { description: "Should fizzbuzz for 90", input: 90, result: "FizzBuzz"},
  ]

  const notfizzbuzzparameters = [
    { description: "Should return 1", input: 1, result: 1},
    { description: "Should return 14", input: 14, result: 14},
    { description: "Should return 49", input: 49, result: 49},
    { description: "Should return 98", input: 98, result: 98},
  ]
  
  buzzparameters.forEach((parameter) => {
    it(parameter.description, () => {
    let fizzbuzz = new FizzBuzz();
    let buzzy = fizzbuzz.fizzbuzz(parameter.input);
    expect(buzzy).toEqual(parameter.result);
  });
  })

  fizzbuzzparameters.forEach((parameter) => {
    it(parameter.description, () => {
    let fizzbuzz = new FizzBuzz();
    let fizzybuzzy = fizzbuzz.fizzbuzz(parameter.input);
    expect(fizzybuzzy).toEqual(parameter.result);
  });
  })

  notfizzbuzzparameters.forEach((parameter) => {
    it(parameter.description, () => {
    let fizzbuzz = new FizzBuzz();
    let normal = fizzbuzz.fizzbuzz(parameter.input);
    expect(normal).toEqual(parameter.result);
  });
  })
});