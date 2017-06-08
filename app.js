/////////////////////////////////////
/* Problem 1 (this is your demo)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(input1, input2) {
  var total = input1 + input2;
  var stringOutcome = 'The sum of ' + input1 + ' and ' + input2 + ' is ' + total + '.';
  var outcome = [total, stringOutcome];

return outcome;
}
// Here is the test for sum(); uncomment it to run it

testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 4 and 7 is 28."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(input3, input4){
  var totalFromSum = input3 * input4;
  var stringOutcomeSum = 'The product of ' + input3 + ' and ' +  input4 + ' is ' + totalFromSum + '.';
  var outcomeFromSum = [totalFromSum, stringOutcomeSum];

  return outcomeFromSum;
}
// Here is the test for multiply(); uncomment it to run it
testMultiply(4,7);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(input5, input6, input7){
  var totalSum = input5 + input6 + input7;
  var sumMultiply = input5 * input6 * input7;
  var sumMultiplyOutcome = [totalSum, sumMultiply, input5 + ' and ' + input6 + ' and ' + input7 + ' sum to ' + totalSum + '.', 'The product of ' + input5 + ' and ' + input6 + ' and ' + input7 + ' is ' + sumMultiply + '.'];

  return sumMultiplyOutcome;

  /*function sumAndMultiply(sam1, sam2, sam3){
  var add3nums = sam1 + sam2 + sam3;
  var mult3nums = sam1 * sam2 * sam3;
  var samArrayStorage = [add3nums, mult3nums, sam1 + " and " + sam2 + " and " + sam3 + " sum to " + add3nums + ".", "The product of " + sam1 + " and " + sam2 + " and " + sam3 + " is " + mult3nums + "."];
  retur

[7:49]
the return is just

[7:49]
return samArrayStorage; */

}
// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/
/*var arratString = [arratSum, testArray[0] + "," + testArrat[1] + "," + testArray[2] + " was passed in as an array of numbers, and " + sumArray + " is their sum.";*/
// Write your code here
function sumArray(testArray){
  var arraySum = testArray[0] + testArray[1] + testArray[2];
  var arrayString = [arraySum, testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + arraySum + ' is their sum.'];
return arrayString;
}
 testArray = [2,3,4];

// Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){
  var arrayMultiply = testArray[0] * testArray[1] * testArray[2];
  var multiString = [arrayMultiply, 'The numbers ' + testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' have a product of ' + arrayMultiply + '.'];
return multiString;
}
// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Submit the link to the repo via Canvas.

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

function testSum() {
  if (sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    console.log('%c TEST FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sum() FAILS', 'color: red');
  }
}

function testMultiply() {
  if (multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiply() FAILS', 'color: red');
  }
}

function testSumAndMultiply() {
  if (sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumAndMultiply() FAILS', 'color: red');
  }
}

function testSumArray() {
  if (sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
  }
}

function testMultiplyArray() {
  if (multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}
