import { fizzBuzz_y_numbers, fizzBuzz, stage2_fizzBuzz } from "../scripts/FizzBuzz";


describe("FizzBuzz test", () =>{
    test("shoud return Fizz if divisible by three", () => {
        let result = fizzBuzz(3);
        expect(result).toBe("Fizz");
    });

    test("shoud return Buzz if divisible by five", () => {
        let result = fizzBuzz(5);
        expect(result).toBe("Buzz");
    });
     test ("shoud return FizzBuzz if divisible by three and by five", () => {
         let result = fizzBuzz(15);
         expect(result).toBe("FizzBuzz");
     });

     //--------------Stage 2--------------
     test ("shoud return Fizz if it is divisible by 3 or if it has a 3 in it", () => {
         let result = stage2_fizzBuzz(23);
         expect(result).toBe("Fizz");
     });

     test ("shoud return buzz if it is divisible by 5 or if it has a 5 in it", () => {
        let result = stage2_fizzBuzz(65);
        expect(result).toBe("Buzz");
    });

     
});