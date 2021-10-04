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
const writeHeader = function(title){
  console.log(`\n\n >-------------------== [${title.toUpperCase()}]==-----------------------<`);
}

writeHeader("TASK 21: ")

let x = "John"
let y = "Doe"
console.log(`"${x} <> ${y}"`);


writeHeader("Task 22 : ")

let obj = {
  name: "Ali",
  surname: "Mukhtor",
  email: "n6mer123@gmail.com"
}
console.log(obj);

writeHeader("Task 23 : ")

delete obj.email
console.log(obj);

writeHeader("Task 24 : ")
let arrayOfStrings = []
for(let i = 0; i < 10; i++){
  let counter = Math.random().toString(20).substr(2, 6)
  arrayOfStrings.push(counter)
}

writeHeader("Task 25 : ")
console.log(arrayOfStrings);


writeHeader("Task 26 : ")
let arrayOfNumbers = []
for(let i = 0; i < 100; i++){
  let randomNumbers = Math.floor(Math.random() * 50);
  arrayOfNumbers.push(randomNumbers)
}
console.log(arrayOfNumbers);


writeHeader("Task 29 : ")
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


writeHeader("Task 30 : ")
let arrays1 = [1, 23, 34, 4, 5, 45, 67, 89]
let arrays2 = [23, 3, 4, 5, 6, 7, 8]
let getSumOfLongestArray = function(param1, param2){
  if(param1.length > param2.length){
    let longestArr = param1
    let counter = 0
    for(let i = 0; i < longestArr.length; i++){
      counter += longestArr[i]
    }
    console.log("The sum of longest Array is that : " + counter);
  }else{
    let longestArr2 = param2
    let counter2 = 0
    for(let j = 0; j < longestArr2.length; j++){
      counter2 += longestArr2[j]
    }
    console.log("The sum of longest array is that : " + counter2);
  }
}
getSumOfLongestArray(arrays1, arrays2)
