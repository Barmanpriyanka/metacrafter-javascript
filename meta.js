// This is an in-line comment.

/* This is a
multi-line comment */

/*creates a variable called myName. In JavaScript, we end statements with semicolons. Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.*/

var myName="priyanka barman";
console.log(myName);
 var myVariable = 5;
console.log(myVariable);

// declares a myVar variable with no value, then assigns it the value 5. Next, a variable named myNum is declared with no value. Then, the contents of myVar (which is 5) is assigned to the variable myNum. Now, myNum also has the value of 5.

var myVar;
myVar = 5;
var myNum;
myNum = myVar;
console.log(myNum);

//Creates a new variable called myVar and assigns it an initial value of 0.
var myVar = 0;

//When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable, your result will be NaN, which means "Not a Number." If you concatenate a string with an undefined variable, you will get a string of undefined.
//Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

//One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:
var camper = "James";
var camper = "David";
console.log(camper);//it will answer as david as overwrite it .To solve this problem we use let.
//If  we  replace var with let in the code above, it results in an error:
let camper = "James";
let camper = "David";


//Declare a Read-Only Variable with the const Keyword- which means that once a variable is assigned with const, it cannot be reassigned:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
//The console will display an error due to reassigning the value of FAV_PET.


//Add Two Numbers with JavaScript
let myVar = 5 + 10;
console.log(myVar);//this will give ans as 15.

