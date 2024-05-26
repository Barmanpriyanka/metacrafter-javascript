
//If Statements and Conditional Logic
//Understanding Boolean Values
//Booleans may only be one of two values: true or false.
//Use Conditional Logic with If Statements
function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }
  
  let t=test(true);
  let f=test(false);
  console.log(t);
  console.log(f);
  //Comparison with the Equality Operator
  function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }
let equality=equalityTest(20);
console.log(equality);//not equal
//Comparison with the Strict Equality Operator
//3 ===  3  // true
//3 === '3' // false
//Comparison with the Inequality Operator
//1 !=  2    // true
//1 != "1"   // false
//1 != '1'   // false
//1 != true  // false
//0 != false // false
//Comparison with the Strict Inequality Operator
//3 !==  3  // false
//3 !== '3' // true
//4 !==  3  // true
//Comparison with the Greater Than Operator
//5   >  3  // true
//7   > '3' // true
//2   >  3  // false
//'1' >  9  // false
//Comparison with the Greater Than Or Equal To Operator
/*6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
Comparison with the Less Than Operator
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
Comparison with the Less Than Or Equal To Operator
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
Comparisons with the Logical And Operator*/

function numPrint1(num){
if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
  }
  return "No";
} 
let num1=numPrint1(15);
console.log(num1);

function numPrint2(num){
  if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";
}
let num2=numPrint2(6);
console.log(num2);

  //Comparisons with the Logical Or Operator
  function numPrint3(num){
  if (num > 10) {
    return "No";
  }
  if (num < 5) {
    return "No";
  }
  return "Yes";
}
let num3=numPrint3(11);
console.log(num3);
function numPrint4(num){
if (num3 > 10 || num3 < 5) {
    return "No";
  }
  return "Yes";
}
let num4=numPrint4(11);
console.log(num4);
//Introducing Else Statements
function numPrint5(num){
if (num4 > 10) {
    return "Bigger than 10";
  } else {
    return "10 or Less";
  }
}
let num5=numPrint5(11);
console.log(num5);
//Introducing Else If Statements
function numPrint6(num){
if (num > 15) {
    return "Bigger than 15";
  } else if (num < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }
}
let num6=numPrint6(16);
console.log(num6);
//Logical Order in If Else Statements
function foo(x) {
    if (x < 1) {
      return "Less than one";
    } else if (x < 2) {
      return "Less than two";
    } else {
      return "Greater than or equal to two";
    }
  }
let x=foo(10);
console.log(x);

function bar(x) {
    if (x < 2) {
      return "Less than two";
    } else if (x < 1) {
      return "Less than one";
    } else {
      return "Greater than or equal to two";
    }
  }
  let y=bar(10);
  console.log(y);
  
  
  

  
  
  






  