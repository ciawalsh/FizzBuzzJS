describe("FizzBuzz", function() {

	var fizzbuzz 

	beforeEach(function() {
		fizzbuzz = new FizzBuzz();
	});

	describe("knows when a number", function() {

		it("is divisible by 3", function() {

			expect(fizzbuzz._isDivisibleBy(3, 3)).toBe(true);

		});

		it("is not divisible by 3", function() {

			expect(fizzbuzz._isDivisibleBy(1,3)).toBe(false);

		});

		it("is divisible by 5", function() {

			expect(fizzbuzz._isDivisibleBy(5, 5)).toBe(true);

		});

		it("is NOT divisible by 5", function() {

			expect(fizzbuzz._isDivisibleBy(1,5)).toBe(false);

		});

		it("is divisible by 3 and 5", function() {

			expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);

		});

		it("is NOT divisible by 3 and 5", function() {

			expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);

		});

	});

	describe("When playing, says", function() {

		it("'Fizz' when a number is divisible by 3", function(){

			expect(fizzbuzz.says(3)).toEqual("Fizz");

		});

		it("'Buzz' when a number is divisible by 5", function(){

			expect(fizzbuzz.says(5)).toEqual("Buzz");

		});

		it("'FizzBuzz' when a number is divisible by 15", function(){

			expect(fizzbuzz.says(15)).toEqual("FizzBuzz");

		});

	});

});


















