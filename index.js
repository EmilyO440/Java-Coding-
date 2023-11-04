console.log('open Class Introduction');

//single line comment

/*
Question 2: Addition Operation

You have been given two variables, num1 and num2, each with predefined values as test cases. Your task is to calculate the sum of these variables and display the result using the console.log()
*/

var num1 = 10;
var num2 = 2;

//add the variables and display using console.log
console.log(num1 + num2);

/*
Question 7:Given the variables num1 and num2. Print the quotient of num1 over num2 to the console using console.log()
*/

var num1 = 45;
var num2 = 15;

//divide the variables and display using console.log
console.log(num1 / num2);

/*
Question 9:Given the variables num1 and num2, use console.log() to print the product of num1 and num2
*/

var num1 = 1300;
var num2 = 1200;

//find the product of the two variables and display using console.log
console.log(num1 * num2);

if (45 > 45){
  console.log("Poodles");
} else {
  console.log("Labradors");
}

let number = 28;

if (number % 3 == 0 && number % 7 == 0) {
   console.log("The number is divisible by both 3 and 7.");
} else if (number % 3 == 0) {
   console.log("The number is divisible by 3.");
} else if (number % 7 == 0) {
   console.log("The number is divisible by 7.");
} else {
   console.log("The number is not divisible by 3 or 7.");
}

var num1 = 3;
      var num2 = 5;
      if (num1 == num2) {
          console.log("A");
      } else if (num1 > num2) { 
          console.log("B");
      } else {
          console.log("C");
      }

      var num1 = 37;

      if (num1) {
         console.log("Parakeet");
      } else {
         console.log("Parrot");
      }

       var num1 = 25;
 var num2 = 18;

 if (num1 == num2){
          console.log("A");
 } else if (num1 > num2){ 
          console.log("B");
 } else {
          console.log("C");
 }

/*
Question 13:Create a nested if statement (the second if statement will only run if the first one evaluates to true) that does the following:
The first if statement will check to see if num1 is greater than or equal to num2 .
If the first if statement evaluates to true, then check to see if num3 is greater than or equal to num4.
If both conditions are true, print: "Both statements are true."
If the first condition is true but the second is false, print: "The first statement is true, but the second is not."
In all cases, after the outer if statement, print "Program ended." to the console.
*/
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);
var num3 = parseInt(input[2]);
var num4 = parseInt(input[3]);

if(num1 >= num2);{
   "num1 is greater than or equal to num2"
} 

let age = 21;
 let isAdult = false;

 if (age >= 13) {
     if (age >= 65) {
        isAdult = true;
        console.log("You pay the Senior Citizen price of $25!");
     } else {
        isAdult = true;
        console.log("You pay the full ticket price of $35!");
     }
 } else {
    console.log("You pay the Child ticket price of $15!");
 }
 