var FizzBuzz = function() {};

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
	return number % divisor === 0;
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
	return this._isDivisibleBy(number, 15);
};

FizzBuzz.prototype.says = function(number) {
	if (this.isDivisibleByFifteen(number)) return "FizzBuzz";
	if (this._isDivisibleBy(number, 3)) return "Fizz";
	if (this._isDivisibleBy(number, 5)) return "Buzz";
	return number;
};