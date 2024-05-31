//Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
//Objects are useful for storing data in a structured way, and can represent real world objects, like a cat
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };
//all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. 
const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };
  //Accessing Object Properties with Dot Notation
  //There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

//Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

const myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  
  const prop1val = myObj.prop1;
  const prop2val = myObj.prop2;
console.log(prop1val);//val1
console.log(prop2val);//val2
//bracket notation
const myObj2 = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  console.log(myObj2["Space Name"]);
  console.log(myObj2['More Space']);
 console.log( myObj2["NoSpace"]);

  //Updating Object Properties
  const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  console.log("before changing name :",ourDog.name);
ourDog.name="Happy Camper";  
console.log("after changing name  :",ourDog.name);
//Add New Properties to a JavaScript Object
const ourDog1= {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog1.bark = "bow-wow";
//Delete Properties from a JavaScript Object
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
