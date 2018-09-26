// test code from previous submodule

'use strict';

const sayHello = function sayHello() {
	console.log('Hello world - test!');
};
sayHello();

// exercise 1 - connecting strings
const part1_1 = 'Hello';
const part1_2 = 'World';
const part1_3 = 1;
const part1_all = `${part1_1} ${part1_2} ${part1_3}`;

//exercise 2 - missing arguments w/ arrow functions
const multiply = (arg1 = 1 , arg2 = 1) => (arg1 * arg2);

//exercise 3 - rest params /w arrow functions
const average = (...args) => (args.reduce((prev, curr) => prev + curr) / args.length);

//exercise 4 - passing array to exercise 3
const grades = [8, 5, 5, 5, 4, 3, 3, 2, 1];
const passedGrades = average(...grades);

//exercise 5 - destructurizing array
const veryStrangeArray = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName , , lastName] = veryStrangeArray;
const exercise5check = (firstName === 'Iwona' && lastName ==='Nowak') ? 5 : 'did not work';




// testing 1
console.log(`${part1_all} OK!`);
// testing 2
console.log(`Hello World ${multiply(2)} OK!`);
// testing 3
console.log(`Hello World ${average(1,3,5)} OK!`);
// testing 4
console.log(`Hello World ${passedGrades} OK!`);
// testing 5
console.log(`Hello World ${exercise5check} OK!`);





// now trying to shorten "checkAll"...

const allTestResults = [part1_3 , multiply(2) , average(1,3,5) , passedGrades , exercise5check];
const mapAllTestResults = allTestResults.map((item,index) => (index + 1));

const checkAll = function (){
	for (let i=0 ; i < allTestResults.length ; i++) {
		if (allTestResults[i] !== mapAllTestResults[i]){
			return false;
		}	
	}
	return true;
}

const finalAnswer = checkAll() === true  ? "ES6 is great !" : "I am stupid";

//console.log('allTestResulsts:', allTestResults);
//console.log('mapAllTestResults: ', mapAllTestResults);

//console.log(`checkAll(): ${checkAll()}`);
console.log(`finalAnswer: ${finalAnswer}`);