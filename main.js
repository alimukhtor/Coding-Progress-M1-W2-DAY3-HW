// JS EXERCISES
//
// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
// 22) Create an object with properties such name, surname, email
// 23) Delete the email property from the previously created object
// 24) Create an array with 10 strings in it
// 25) Print in the console every string from the previous array
// 26) Create an array with 100 random numbers in it
// 27) Write a function to get the maximum and minimum values from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers
// 29) Create a function that gets 2 arrays as parameters and returns the longest one
// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values


// =============================================

// Task 21:

let x = "John"
let y = "Doe"
console.log(`"${x} <> ${y}"`);


// Task 22:

let obj = {
  name: "Ali",
  surname: "Mukhtor",
  email: "n6mer123@gmail.com"
}
console.log(obj);


// Task 23:

delete obj.email
console.log(obj);

// Task 24:
let arrayOfStrings = []
for(let i = 0; i < 10; i++){
  let counter = Math.random().toString(20).substr(2, 6)
  arrayOfStrings.push(counter)

}



// Task 25:

console.log(arrayOfStrings);


// Task 26:
let arrayOfNumbers = []
for(let i = 0; i < 100; i++){
  let randomNumbers = Math.floor(Math.random() * 50);
  arrayOfNumbers.push(randomNumbers)
}
console.log(arrayOfNumbers);


// Task 28:

// let arrayOFArrays = [[]]
// for(let i = 0; i < 10; i++){
//   for(let j = 0; j < 10; j++){
//     let randomNums =  Math.floor(Math.random() * 50)
//     arrayOFArrays[i][j].push(randomNums)
//   }
// }
// console.log(arrayOFArrays);


// Task 29:
let arr1 = [1, 23, 34, 4, 5]
let arr2 = [23, 3, 4, 5, 6, 7, 8]
let getLongestArray = function(par1, par2){
  if(par1.length > par2.length){
    console.log("Longest one is : " + par1)
  }else{
    console.log("Longest one is : " + par2)
  }
}
getLongestArray(arr1, arr2)


// Task 30:  // I know i needed to do first find the longest array and then calculate the sum of it.becaue of time management i was stucked. Sorry :)
let arrays2 = [23, 3, 4, 5, 6, 7, 8]
let getSumOfLongestArray = function(param2){
  let counter = 0
  for(let i = 0; i < param2.length; i++){
    counter += param2[i]
  }
  console.log("The sum of Longest array is : " + counter);
}
getSumOfLongestArray(arrays2)
