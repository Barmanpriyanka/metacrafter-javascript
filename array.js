//Store Multiple Values in one Variable using JavaScript Arrays
const sandwich = ["peanut butter", "jelly", "bread"];
//Nest one Array within Another Array
const teams = [["Bulls", 23], ["White Sox", 45]];
//Access Array Data with Indexes
const array = [50, 60, 70];
console.log(array[0]);//50
const data = array[1];
console.log(data);//60
///Modify Array Data With Indexes
//Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const
const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log(ourArray[0]);//15
//Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];
  console.log(subarray);
  console.log(nestedSubarray);
  console.log(element);
  //Manipulate Arrays With push Method
  //.push() takes one or more parameters and "pushes" them onto the end of the array.
  const arr1 = [1, 2, 3];
arr1.push(4);
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr1);
console.log(arr2);
//Manipulate Arrays With pop Method
//.pop() is used to pop a value off of the end of an array.
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);//6
console.log(threeArr);//[1,4]
//Manipulate Arrays With shift Method
//.shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
const ourArray1 = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray1.shift();
console.log(removedFromOurArray);//stimpson
console.log(ourArray1);
//Manipulate Arrays With unshift Method
//.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
const ourArray3 = ["Stimpson", "J", "cat"];
let shift=ourArray3.shift();
ourArray3.unshift("Happy");
console.log(ourArray3);
console.log(shift);




  