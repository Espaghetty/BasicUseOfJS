/*
Espaghetty

Purpose: Calculate the number of miles per gallon. In addition, convert the input into kilometers and liters, and calculate the Km/L. Display all input variables and output.
*/

alert("Question 2 - Stop right there, I have a question!");

//Create variable miles and converts user input into to a float data type
var miles = parseFloat(prompt("How many miles have you driven?"));

//Creates variables gallon and converts user input to a float data type
var gallons = parseFloat(prompt("How many gallons have you used?"));

//Beginning of the JS output
document.write("For my American friends: <br/>")
document.write("miles: " + miles 
                        + "<br /> gallons: " +gallons); 

//Calculates the Miles per gallon
var MPG = miles / gallons;

let kilometers = 1.6;//Default value for kilometers
kilometers *= miles;//Convert miles to kilometers


//Displays MPG and Kilometers
document.write("<br />The miles per gallon (MPG) is " + MPG + ". <br />" + "<br />For my European friends:<br />"
                                                +"In kilometers: " + kilometers + "<br />"); 

    let liters = 3.78541;//Default value for liters
    liters *= gallons;//Converts the gallons to liters.

    //Displays liters 
    document.write("In liters: " + liters);

//Calculates and the displays the Kilo per liter 
let KiloPerLiters = kilometers / liters;
document.write("<br />The Kilometer per liters is: " + KiloPerLiters + "<br />");



