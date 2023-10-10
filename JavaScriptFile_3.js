/*
Espaghetty

Purpose: Calculate how many coins (quarters, dimes, nickels and pennies) must be given back to the client so that they have the LEAST amount of coins
*/
alert("Question 3 - Coin CheckPoint")

//Creating variable and assigning the user entered value into the variable.
let coins = parseInt(prompt("How many coins do you have?"))

//Divides coins
var quarters = parseInt(coins / 25);
coins %= 25;//sets the value for the next variable
var dimes = parseInt(coins /10);
coins %= 10;//sets the value for the next variable
var nickel = parseInt(coins / 5);
coins %= 5;//sets the value for the next variable
var pennies = parseInt(coins / 1); 

//Displays the amount of coins divided into their slots.
document.write(quarters + " Quarter, " + dimes + " dimes, " + nickel + " Nickels, " + pennies + " pennies<br />");