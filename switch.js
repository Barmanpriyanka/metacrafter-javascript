//A switch statement tests a
//value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.
 let lowercaseLetter="a";
switch (lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  }
  //Adding a Default Option in Switch Statements
  /*switch (num) {
    case value1:
      statement1;
      break;
    case value2:
      statement2;
      break;
    default:
      defaultStatement;
      break;
  }*/
  //Multiple Identical Options in Switch Statements
  //If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered

  /*let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}*/

//if/else statement to check a condition:
function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
  }
let greater=findGreater(34,67);
console.log(greater);  
//Use the Conditional (Ternary) Operator
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
  }
  let greater2=findGreater(65,78);
  console.log(greater2);
  //if, else if, and else statements to check multiple conditions:
  function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }
let greater3=findGreaterOrEqual(5,6);
console.log(greater3);
//ternary
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }
let greater5=findGreaterOrEqual(67,89);
console.log(greater5);
  



  
  
  