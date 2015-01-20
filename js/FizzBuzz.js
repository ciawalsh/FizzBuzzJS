var FizzBuzz = function() {};

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
	return number % divisor === 0;
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
	return this._isDivisibleBy(number, 15);
};