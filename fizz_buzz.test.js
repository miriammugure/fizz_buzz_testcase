const{numbers}= require("./main")

describe("numbers" ,()=> {
    it("returns FizzBuzz if divisible by both 3 and 5" ,()=>
    {
        expect(numbers(90)).toBe("FizzBuzz");
    })
    it("returns Fizz if divisible by  3 " ,()=>
        {
            expect(numbers(3)).toBe("Fizz");
        })
    it("returns Buzz if divisible by  5" ,()=>
        {
            expect(numbers(5)).toBe("Buzz");
        })

    it("returns number if not divisible by both 3 and 5" ,()=>
        {
            expect(numbers(71)).toBe(71);
        })

})