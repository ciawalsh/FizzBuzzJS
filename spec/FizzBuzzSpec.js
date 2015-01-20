describe("FizzBuzz", function() {

	var fizzbuzz 

	describe("knows when a number", function() {

		it("is divisible by 3", function() {

			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);

		});

		it("is not divisible by 3", function() {

			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);

		});

		it("is divisible by 5", function() {

		});

		it("is NOT divisible by 5", function() {

		});

		it("is divisible by 3 and 5", function() {

		});

		it("is NOT divisible by 3 and 5", function() {

		});

	});

});