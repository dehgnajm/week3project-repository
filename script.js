console.log("hello world");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1a.   Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//1b.   Add a new age to your array and repeat the step above to ensure it is dynamic. 
ages.push(40); // add new age to the end of the array
let difference = ages[ages.length - 1] - ages[0];
console.log(difference);
//1c.   Use a loop to iterate through the array and calculate the average age. 
let sum = 0;
for (let i = 0; i < ages.length; i++) {
sum += ages[i];
	}
let average = sum / ages.length;
console.log(average);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//2a.   Use a loop to iterate through the array and calculate the average number of letters per name. 
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
totalLetters += names[i].length;
	}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);
//2b.   Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let namesConcate = ' ';
for (let i = 0; i < names.length; i++) {
namesConcate += names[i] + ' ';
  }
console.log(namesConcate);
//5.  Create a new array called nameLengths
let myNames = ['Najmeh', 'Ann', 'Dave'];
let nameLengths = [];
for (let i=0; i < myNames.length; i++){
nameLengths.push(myNames[i].length);
} 
console.log(nameLengths);
let nameLength = [6, 3, 4];
  let sumOfName = 0;
  for (let i = 0; i < nameLengths.length; i++) { // iterate over the elements in the nameLengths array
    sumOfName += nameLengths[i];
  } 
  console.log(sumOfName);
  function concatenated(word, n){
    let result = "";
    for (let i = 0; i < n; i++) {
      result += word;
    }
    return result;
  }
//for example:
  let result = concatenated("Hello", 3);
console.log(result); 
function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
  } 
  // for example:
  let myName = fullName('Najmeh', 'Dehghani');
  console.log(myName);
  function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum > 100;
  }
  //for example:
  let array1 = [10, 2, 20];
  console.log(sumArray(array1));
  function getAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  //for example:
  let arr1 = [10, 20, 30, 40];
  console.log(getAverage(arr1));
 
function greaterAverage(no1, no2){
    let sum1 = 0;
    for (let i = 0; i < no1.length; i++){
      sum1 += no1[i];
    }
  let avg1 = sum1 / no1.length;
  let sum2 = 0;
  for (let i = 0; i < no2.length; i++){
    sum2 += no2[i];
  }
  let avg2 = sum2 / no2.length;
  return avg1 > avg2;
  }
  //for example:
  let no1 = [20, 10, 30, 50];
  let no2 = [50, 20, 60, 40];
  console.log(greaterAverage(no1, no2));
  function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
      return true;
    } else {
      return false;
    }
  }
  //for example:
  console.log(willBuyDrink(true, 10));  // Output: true
  console.log(willBuyDrink(false, 5));  // Output: false
  console.log(willBuyDrink(true, 20));  // Output: false
 //write a function that takes an array of numbers as input and returns their sum.
//this function initializes the variable 'sum' to zero.
//it loops through the array 'arr'.
//it adds each element to the 'sum'.
//the function returns the sum of the array.
//it's a common function,
//it is useful in calculating averages, and finding max or min values in arrays.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
    