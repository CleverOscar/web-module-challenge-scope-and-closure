// ⭐️ Example Challenge START ⭐️
 
/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    declaring counter1 holding a function where inside the function we declare a count variable, returning count increamented by 1 when the function is called, but everytime the function is called
 *    count variable resets to 0, counter2 is decalaring a function returning count variable incremented by 1 but does not reset the variable since it is outside of its scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    counter1 is using closure since we are returning a callback function within counterMaker function. return count is where the closure is happening since we are reaching outward to get context
 *    from our variable, also which allows us to keep the data presistant
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    Counter1 would work more when you are trying to get a single repeated answer everytime the function is called, counter2 increments the variable by one everytime it is called.
 * 
*/

// counter1 code 
// Function A
function counterMaker() {
  let count = 0;
  // function B
  return function counter() {
   return count++;
  }
}

// Calling counterMaker Function 
const counter1 = counterMaker();

// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3);
}

const pointsScored = inning();

// console.log('Points:',pointsScored)

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 

function finalScore(callback, num){
  var callback = callback;

  let scores = {
    "Home": 0,
    "Away": 0
  }

  return function scoreKepper() {
    return scores
  }
}

const final = finalScore();




// Function A
const nameconstruct = () => {
  let name = 'Oscar';

  // Function B
  return function ( newName = '') {
    if (newName === '') {
      return name
    } else {
      name = newName;
      return name;
    }
  }
}

// Calling function A to set things up and fill namefunc with the returned function b
const namefunc = nameconstruct();

// Calling the function within namefunc which is actuall function B, this bypassing function
// console.log(namefunc())
// console.log(namefunc('Sam'))
// console.log(namefunc('Toby'))
// console.log(namefunc())




// function A
// const counter = () => {
//   let count = 0;

//   // count++;


//   // function B
//   return function() {
//     count = count + 1;
//     return count;
//   };
// }

// let newCounter = counter();

// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())

// // newCounter = counter();

// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


// Example Code
// function flipCoin(times){
//   let headCount = 0;
//   for (let i = 0; i < times; i++) {
//     let coinFlip = Math.round(Math.random());
//     if (coinFlip === 1) {
//       headCount += 1;
//       console.log('Heads')
//     } else {
//       console.log('Tails')
//     }
//   } //end of loop scope
//   console.log(headCount)
// }//end of function scope
