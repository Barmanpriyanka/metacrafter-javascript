//Write Reusable JavaScript with Functions
function functionName() {
    console.log("Hello World");
  }
functionName();
//Passing Values to Functions with Arguments
function testFun(param1, param2) {
    console.log(param1, param2);
  }
  testFun("sonam","Priya");
  //Return a Value from a Function with Return
  function plusThree(num) {
    return num + 3;
  }
  
  const answer = plusThree(5);
  console.log(answer);
  //In JavaScript, scope refers to the visibility of variables. Variables that are defined outside of a function block have Global scope. This means they can be seen everywhere in your JavaScript code.
  
 //Local Scope and Functions-Variables that are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
 function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
  //console.log(loc);  loc is defined inside the function so its local variable its visibility inside the function only.
  //Global vs. Local Scope in Functions
  const someVar = "Hat";

function myFun() {
  const someVar = "Head";//local 
  return someVar;
}
let f2=myFun();
console.log(f2);//The function myFun will return the string Head because the local version of the variable is present.
//Assignment with a Returned Value
//everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.
//ourSum = sum(5, 12);


//Returning Boolean Values from Functions
function isEqual(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
let equal=isEqual(2,"2");
console.log(equal);  
//Return Early Pattern for Functions
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();
  