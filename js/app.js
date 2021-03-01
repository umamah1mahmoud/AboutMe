'use strict'

let userName=prompt('Hello there! What is your name?');
alert('Hello ' + userName +'! Welcome in my little game');

let yes= 'Yes'.toLowerCase();
let y= 'Y'.toLowerCase();
let no= 'No'.toLowerCase();
let n= 'N'.toLowerCase();
let i=0;

let myAge=prompt('Am I 30 years old?');
if (myAge==yes||myAge==y){
    alert('Sorry, wrong answer.');
    
}
if (myAge==no|| myAge==n){
   alert('You guessed right!'); 
  i=i+1;
   
}

let myCountry=prompt('Do I live in Jordan?');
if (myCountry==no||myCountry==n){
  alert('Sorry, wrong answer.');
  
}
if (myCountry==yes|| myCountry==y){
 alert('That is right, Go on!');
 i=i+1;
 
}

let myColor=prompt('Is green my favorite color?');
if (myColor==yes||myColor==y){
  alert('Sorry, wrong answer.');
  
  
}
if (myColor==no|| myColor==n){
 alert('You guessed right, Go on!');
 i=i+1;
 
}

let myHobby=prompt('Do I enjoy watching movies?');
if (myHobby==no||myHobby==n){
  alert('Sorry, wrong answer.');
  
}
if (myHobby==yes|| myHobby==y){
 alert('That is right, one more question to go!');
 i=i+1;
 
}

let myFav=prompt('Is horror my favorite movies genre?');
if (myColor==yes||myColor==y){
  alert('That was wrong');
  
}
if (myColor==no|| myColor==n){
 alert('That is a right answer!');
 i=i+1;
 
}

alert('Your total is ' + i + ' out of 5');
alert('I hope you enjoyed it ' +userName+ ', and I hope you got most of them right.');
