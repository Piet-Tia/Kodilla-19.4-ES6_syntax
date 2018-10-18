// test code from previous submodule

'use strict';

var sayHello = function sayHello() {
	console.log('Hello world - test!');
};
sayHello();

// exercise 1 - connecting strings
var part1_1 = 'Hello';
var part1_2 = 'World';
var part1_3 = 1;
var part1_all = part1_1 + ' ' + part1_2 + ' ' + part1_3;

//exercise 2 - missing arguments w/ arrow functions
var multiply = function multiply() {
	var arg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var arg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return arg1 * arg2;
};

//exercise 3 - rest params /w arrow functions
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args.reduce(function (prev, curr) {
		return prev + curr;
	}) / args.length;
};

//exercise 4 - passing array to exercise 3
var grades = [8, 5, 5, 5, 4, 3, 3, 2, 1];
var passedGrades = average.apply(undefined, grades);

//exercise 5 - destructurizing array
var veryStrangeArray = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = veryStrangeArray[2],
    lastName = veryStrangeArray[4];

var exercise5check = firstName === 'Iwona' && lastName === 'Nowak' ? 5 : 'did not work';

// testing 1
console.log(part1_all + ' OK!');
// testing 2
console.log('Hello World ' + multiply(2) + ' OK!');
// testing 3
console.log('Hello World ' + average(1, 3, 5) + ' OK!');
// testing 4
console.log('Hello World ' + passedGrades + ' OK!');
// testing 5
console.log('Hello World ' + exercise5check + ' OK!');

// now trying to shorten "checkAll"...

var allTestResults = [part1_3, multiply(2), average(1, 3, 5), passedGrades, exercise5check];
var mapAllTestResults = allTestResults.map(function (item, index) {
	return index + 1;
});

// something to laugh at:
var checkTest = function checkTest() {
	return allTestResults.forEach(function (el, index) {
		return allTestResults[index] !== mapAllTestResults[index] ? true : true;
	});
};

var checkAll = function checkAll() {
	for (var i = 0; i < allTestResults.length; i++) {
		if (allTestResults[i] !== mapAllTestResults[i]) {
			return false;
		}
	}
	return true;
};

var finalAnswer = checkAll() === true ? "ES6 is great !" : "I am stupid";

console.log('finalAnswer: ' + finalAnswer);
