'use strict';

//Do not change any of the function names

function multiplyArguments() {
	var result = 1;

	if (arguments.length === 0) return 0;
	else if (arguments.length === 1) return arguments[0];

	for (var i = 0; i < arguments.length; i++) {
		result *= arguments[i];
	}

	return result;
}

function invokeCallback(cb) {
	cb();
	//invoke cb
}

function sumArray(numbers, cb) {
	cb(numbers.reduce(function(acc, val) {
		return acc + val;
	}));
}

function forEach(arr, cb) {
	arr.forEach(function(currentVal) {
		cb(currentVal);
	});
}

function map(arr, cb) {
	var newArr = arr.map(function(num) {
		return cb(num);
	});
	return newArr;
}

function getUserConstructor() {
	return User = {
		username: this.username,
		name: this.name,
		email: this.email,
		password: this.password
	};
	//create a constructor called User
	//it should accept an options object with username, name, email, and password properties
	//in the constructor set the username, name, email, and password properties
	//the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
	//{{name}} should be the name set on each instance
	//return the constructor
}

function addPrototypeMethod(Constructor) {
	//add a method to the constructor's prototype
	//the method should be called 'sayHi' and should return the string 'Hello World!'
}

function addReverseString() {
	//add a method to the string constructor's prototype that returns a reversed copy of the string
	//name this method reverse
	//hint:
	//you will need to use 'this' inside of reverse
}

function nFactorial(n) {
	//return the factorial for n
	//solve this recursively
	//example:
	//the factorial of 3 is 6 (3 * 2 * 1)
}

function cacheFunction(cb) {
	//Extra Credit
	//use closure to create a cache for the cb function
	//the function that you return should accept a single argument and invoke cb with that argument
	//when the function you return is invoked with an argument it should save that argument and its result
	//when the function you return is called again with an argument that it has seen before it should not call cb
	//but should instead directly returned the previous result
	//example:
	//cb -> function(x) { return x * x; }
	//if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
	//if the function you return is invoked again with 5 it will look on an object in the closure scope
	//and return 25 directly and will not invoke cb again
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
	multiplyArguments: multiplyArguments,
	invokeCallback: invokeCallback,
	sumArray: sumArray,
	forEach: forEach,
	map: map,
	getUserConstructor: getUserConstructor,
	addPrototypeMethod: addPrototypeMethod,
	addReverseString: addReverseString,
	nFactorial: nFactorial,
	cacheFunction: cacheFunction
};
