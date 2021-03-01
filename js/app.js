'use strict'

let yes= 'Yes'.toLowerCase();
let y= 'Y'.toLowerCase();
let no= 'No'.toLowerCase();
let n= 'N'.toLowerCase();
let myAge=prompt('Am I 30 years old?');
if (myAge==yes||myAge==y){
    alert('Sorry, wrong answer.');
}
if (myAge==no|| myAge==n){
   alert('You guessed right!');
}

console.log(myAge)

