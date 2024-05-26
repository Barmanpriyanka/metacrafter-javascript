//Escaping Literal Quotes in Strings
//In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);
//single and double quotes work the same in JavaScript.

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

//However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
console.log(conversation);
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
//const badStr = 'Finn responds, "Let's go!"'; this will give error if we use \  it would not
console.log(goodStr);
//Concatenating Strings with Plus Operator
let a='My name is Alan,' + ' I concatenate.';
console.log(a);
const ourStr = "I come first. " + "I come second.";
console.log(ourStr);
//Concatenating Strings with the Plus Equals Operator
let ourStr2 = "I come first. ";
ourStr2 += "I come second.";
console.log(ourStr2);
//By using the concatenation operator (+), you can insert one or more variables into a string you're building.
const ourName = "Metacrafters";
const ourStr3 = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr3);
//Appending Variables to Strings
//we can also append variables to a string using the plus equals (+=) operator.
const anAdjective = "awesome!";
let ourStr4 = "Metacrafters is ";
ourStr4 += anAdjective;
console.log(ourStr4);//ourStr would have the value Metacrafters is awesome!
//Find the Length of a String
console.log("Alan Peter".length);//10
//Understand String Immutability
let myStr = "Bob";
myStr[0] = "J"; //cannot change string are immutable .but does not mean cannot be reassigned.
console.log(myStr);//Bob
//this does not mean that myStr could not be re-assigned. The only way to change myStr would be to assign it with a new value, like this:
let myStr1 = "Bob";
myStr1 = "Job";
console.log(myStr1);//Job









