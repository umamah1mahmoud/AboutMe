'use strict';

let userName=prompt('Hello there! What is your name?');
alert('Hello ' + userName +'! Welcome in my little game');

let yes= 'yes';
let y= 'y';
let no= 'no';
let n= 'n';
let i=0;

//<<<<<<<<<<<<<<<<<<< Q1 >>>>>>>>>>>>>>>>>>>>>>>>

let myAge=prompt('Am I 30 years old?').toLowerCase();
if (myAge==yes||myAge==y){
    alert('Sorry, wrong answer.');
    
}
if (myAge==no|| myAge==n){
   alert('You guessed right!'); 
  i=i+1;
   
}

//<<<<<<<<<<<<<<<<<<< Q2 >>>>>>>>>>>>>>>>>>>>>>>>

let myCountry=prompt('Do I live in Jordan?').toLowerCase();
if (myCountry==no||myCountry==n){
  alert('Sorry, wrong answer.');
  
}
if (myCountry==yes|| myCountry==y){
 alert('That is right, Go on!');
 i=i+1;
 
}

//<<<<<<<<<<<<<<<<<<< Q3 >>>>>>>>>>>>>>>>>>>>>>>>

let myColor=prompt('Is green my favorite color?').toLowerCase();
if (myColor==yes||myColor==y){
  alert('Sorry, wrong answer.');
  
  
}
if (myColor==no|| myColor==n){
 alert('You guessed right, Go on!');
 i=i+1;
 
}

//<<<<<<<<<<<<<<<<<<< Q4 >>>>>>>>>>>>>>>>>>>>>>>>

let myHobby=prompt('Do I enjoy watching movies?').toLowerCase();
if (myHobby==no||myHobby==n){
  alert('Sorry, wrong answer.');
  
}
if (myHobby==yes|| myHobby==y){
 alert('That is right, one more question to go!');
 i=i+1;
 
}

//<<<<<<<<<<<<<<<<<<< Q5 >>>>>>>>>>>>>>>>>>>>>>>>

let myFav=prompt('Is horror my favorite movies genre?').toLowerCase();
if (myColor==yes||myColor==y){
  alert('That was wrong');
  
}
if (myColor==no|| myColor==n){
 alert('That is a right answer!');
 i=i+1;
 
}

//<<<<<<<<<<<<<<<<<<< Q6 >>>>>>>>>>>>>>>>>>>>>>>>
let sub=3;
let userNumber= parseInt(prompt('Guess the number'));
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

alert('the correct answer is 50')


//<<<<<<<<<<<<<<<<<<< Q7 >>>>>>>>>>>>>>>>>>>>>>>>



let attempts=5;
let cities=['berlin', 'copenhagen', 'rome']
let userCity=prompt('Can you guess one of my "to visit" list for European capital cities?').toLowerCase();
do {
  attempts-=1;  
  
  if(userCity===cities[0] || userCity===cities[1] || userCity===cities[2]) {
    alert(' You are good at this!');
    i=i+1; 
    break;
  } else if (userCity!=cities[0] && userCity!=cities[1] && userCity!=cities[2]) {
    userCity=prompt('Wrong answer... Hint! The official language is Danish');
  
    
  }
}while (attempts>0);
alert ('The right answers are Berlin, Copenhagen and Rome');

alert('Your total score is ' +i+ ' out of 7');
alert('I hope you enjoyed it ' +userName+ ', and I hope you got most of them right.');
