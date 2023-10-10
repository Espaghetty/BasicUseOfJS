/*
Espaghetty

Purpose: The program calculates and displays the area of the room based on the user input.
*/

//Alert pop-up #1
alert("*Question 1 - Stops right in front of you*");

//Alert pop-up #2
alert("Hey I have a question for you and I need you to answer.");

//Variable declaration
var length;
var width; 

//parseFloat converts the string into a number. 
width = parseFloat(prompt("What is the width of the room? (Decimals are accepted)"));

//parseFloat converts the string into a number
length = parseFloat(prompt("What is the length of the room? (Decimals are accepted)"));

//Calculation 
var area = length * width;

//Display the area
document.write("The area of the room is " + area + ". End of Question 1. <br />");