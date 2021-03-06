'use strict';

let userName=prompt('Hello there! What is your name?');
alert('Hello ' + userName +'! Welcome in my little game');

let yes= 'yes';
let y= 'y';
let no= 'no';
let n= 'n';
let i=0;

//<<<<<<<<<<<<<<<<<<< Q1 >>>>>>>>>>>>>>>>>>>>>>>>
function age(){
  let myAge=prompt('Am I 30 years old?').toLowerCase();
  if (myAge===yes||myAge===y){
    alert('Sorry, wrong answer.');
  }
  if (myAge===no|| myAge===n){
    alert('You guessed right!');
    i=i+1;
  }
}
age();
//<<<<<<<<<<<<<<<<<<< Q2 >>>>>>>>>>>>>>>>>>>>>>>>
function country(){
  let myCountry=prompt('Do I live in Jordan?').toLowerCase();
  if (myCountry===no||myCountry===n){
    alert('Sorry, wrong answer.');
  }
  if (myCountry===yes|| myCountry===y){
    alert('That is right, Go on!');
    i=i+1;
  }
}
country();

//<<<<<<<<<<<<<<<<<<< Q3 >>>>>>>>>>>>>>>>>>>>>>>>
function color(){
  let myColor=prompt('Is green my favorite color?').toLowerCase();
  if (myColor===yes||myColor===y){
    alert('Sorry, wrong answer.');
  }
  if (myColor===no|| myColor===n){
    alert('You guessed right, Go on!');
    i=i+1;
  }
}
color();
//<<<<<<<<<<<<<<<<<<< Q4 >>>>>>>>>>>>>>>>>>>>>>>>
function hobby(){
  let myHobby=prompt('Do I enjoy watching movies?').toLowerCase();
  if (myHobby===no||myHobby===n){
    alert('Sorry, wrong answer.');
  }
  if (myHobby===yes|| myHobby===y){
    alert('That is right, one more question to go!');
    i=i+1;
  }
}
hobby();
//<<<<<<<<<<<<<<<<<<< Q5 >>>>>>>>>>>>>>>>>>>>>>>>
function fav(){
  let myFav=prompt('Is horror my favorite movies genre?').toLowerCase();
  if (myFav===yes||myFav===y){
    alert('That was wrong');
  }
  if (myFav===no|| myFav===n){
    alert('That is a right answer!');
    i=i+1;
  }
}
fav();
//<<<<<<<<<<<<<<<<<<< Q6 >>>>>>>>>>>>>>>>>>>>>>>>
let sub=3;
let userNumber= parseInt(prompt('Guess the number'));
function number(){
  do {
    sub-=1;

    if (userNumber>50){
      userNumber=prompt('too high');
    } else if (userNumber<50) {
      userNumber=prompt('too low');
    } else {
      alert(' You are good at this!');
      i=i+1;
      break;
    }

  }while (sub>0);
}
number();

alert('the correct answer is 50');
//<<<<<<<<<<<<<<<<<<< Q7 >>>>>>>>>>>>>>>>>>>>>>>>
function cities (){
  let attempts=5;
  let cities=['berlin', 'copenhagen', 'rome'];
  let userCity=prompt('Can you guess one of my "to visit" list for European capital cities?').toLowerCase();
  do {
    attempts-=1;
    if(userCity===cities[0] || userCity===cities[1] || userCity===cities[2]) {
      alert(' You are good at this!');
      i=i+1;
      break;
    } else if (userCity!==cities[0] && userCity!==cities[1] && userCity!==cities[2]) {
      userCity=prompt('Wrong answer... Hint! The official language is Danish');
    }
  }while (attempts>0);
}
cities();

alert ('The right answers are Berlin, Copenhagen and Rome');
alert('Your total score is ' +i+ ' out of 7');
alert('I hope you enjoyed it ' +userName+ ', and I hope you got most of them right.');
