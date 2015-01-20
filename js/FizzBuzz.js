var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
<<<<<<< HEAD
	return (number % 3 === 0);
=======
	return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
	return number % 5 === 0;
};

FizzBuzz.prototype.isDivisibleByThreeAndFive = function(number) {
	return number % 3 === 0 && number % 5 === 0;
>>>>>>> a30457ffde928228348308fd7905fabe11cdde7a
};