// Iteration #1: Find the maximum
function maxOfTwoNumbers(x,y){return Math.max(x,y)}

// Iteration #2: Find longest word
//SOLUTION WITH THE LONGEST WORD 
const words2 = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function getMax(array){
   if(array.length === 0)return undefined;
   return array.reduce((accumulator, current ) => {
     return (accumulator.length > current.length ) ? accumulator : current;
    },'')
}
console.log(getMax(words2));//cocodrile

//-----------------------------------------------------------------------------------------//
//ANOTHER SOLUTION WITH FOR LOOP

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(arr){
  let longest = '';
  if(arr.length === 0){
    return null
  }
  for(let i = 0; i < arr.length; i++){

     if(arr[i].length > longest.length){
      longest = arr[i]
    }

  }
  return longest;
}
console.log(findLongestWord(words));//cocodrile
//MIRAR EL METODO SORT !!!
//-------------------------------------------------------------------------------------//
// Iteration #3: Calculate the sum
//CALCULATE SUM WITH REDUCE AND FUNCTION 
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(num){
  let sum = 0;
  for(let i = 0; i < num.length; i++){
   sum += num[i];
  }
  return sum;
}

sumArray(numbers);//87
//-------------------------------------------------------------------------------------//
//ANOTHER SOLUTION WITH REDUCE METHOD 
const numbers2 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray2(num){
  return num.reduce((accumulator, currentValue) => 
    accumulator + currentValue);
}
console.log(sumArray2(numbers2));//87

//--------------------------------------------------------------------------------------//
//CALCULATE SUM WITH REDUCE ONLY
const numbers3 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const total = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);//87

//-----------------------------------------------------------------------------------------//
// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
      if(arr.length === 0) {return null}
  }

  return sum/arr.length

}
averageNumbers(numbersAvg);//The average is 6

//---------------------------------------------------------------------------------------------//
//Level 2: Array of strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength(arr){
  let averageLength = 0;
  
  
  for(let i  = 0; i < arr.length; i++){
    if(arr.length === 0){
      return null
      }
    
     averageLength += arr[i].length;
  }
  return averageLength/arr.length 
  }

  console.log(averageWordLength(wordsArr));//5.3

//------------------------------------------------------------------------------------------------------//
// Iteration #5: Unique arrays
//Solution with includes 
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arrayOfWords) {
  let uniqueArray = [];
  for(i = 0; i < arrayOfWords.length; i++) {
    if(!uniqueArray.includes(arrayOfWords[i])) {
      uniqueArray.push(arrayOfWords[i])
    }
  }
  return uniqueArray;
}

console.log(uniquifyArray(wordsUnique));// poison,simple,bring was eliminated 

//-----------------------------------------------------------------------------------------------//

//Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(arr, word){
  return arr.includes(word)
 }

 console.log(doesWordExist(wordsFind));//false

//------------------------------------------------------------------------------------------------------//
// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimes(array,word){
  if(array.length === 0) return 0;
  let count = 0;
   for(let i = 0; i < array.length; i++){
    if(array[i] === word)
      count ++;
    }
  return count
}

console.log(howManyTimes(wordsCount,'machine'));// 1 time 

//--------------------------------------------------------------------------------------------------//
