'use strict';

let userName=prompt('Hello there! What is your name?');
alert('Hello ' + userName +'! Welcome in my little game');

let yes= 'Yes'
let y= 'Y'
let no= 'No'
let n= 'N'
let i=0;

//<<<<<<<<<<<<<<<<<<< Q1 >>>>>>>>>>>>>>>>>>>>>>>>

let myAge=prompt('Am I 30 years old?'.toLowerCase());
if (myAge==yes||myAge==y){
    alert('Sorry, wrong answer.');
    
}
if (myAge==no|| myAge==n){
   alert('You guessed right!'); 
  i=i+1;
   
}

//<<<<<<<<<<<<<<<<<<< Q2 >>>>>>>>>>>>>>>>>>>>>>>>

let myCountry=prompt('Do I live in Jordan?'.toLowerCase());
if (myCountry==no||myCountry==n){
  alert('Sorry, wrong answer.');
  
}
if (myCountry==yes|| myCountry==y){
 alert('That is right, Go on!');
 i=i+1;
 
}

//<<<<<<<<<<<<<<<<<<< Q3 >>>>>>>>>>>>>>>>>>>>>>>>

let myColor=prompt('Is green my favorite color?'.toLowerCase());
if (myColor==yes||myColor==y){
  alert('Sorry, wrong answer.');
  
  
}
if (myColor==no|| myColor==n){
 alert('You guessed right, Go on!');
 i=i+1;
 
}

//<<<<<<<<<<<<<<<<<<< Q4 >>>>>>>>>>>>>>>>>>>>>>>>

let myHobby=prompt('Do I enjoy watching movies?'.toLowerCase());
if (myHobby==no||myHobby==n){
  alert('Sorry, wrong answer.');
  
}
if (myHobby==yes|| myHobby==y){
 alert('That is right, one more question to go!');
 i=i+1;
 
}

//<<<<<<<<<<<<<<<<<<< Q5 >>>>>>>>>>>>>>>>>>>>>>>>

let myFav=prompt('Is horror my favorite movies genre?'.toLowerCase());
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
let cities=['Berlin', 'Copenhagen', 'Rome', 'Madrid', 'Amsterdam']
let userCity=prompt('Can you guess my "to visit" list for European capital cities?')
do {
  attempts-=1;  
  
  if(cities.includes(userCity)){
    alert(' You are good at this!');
    i=i+1; 
    break;
  } else {
    userCity=prompt('Wrong! try again');
  
    
  }
}while (attempts>0);

for(let c=0; c<cities.length; c++) {
  alert (cities[c]);
}

alert('Your total is ' +i+ ' out of 7');
alert('I hope you enjoyed it ' +userName+ ', and I hope you got most of them right.');
