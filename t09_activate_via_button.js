/* Paste your code from task 7 here*/
/****************************
Name of task: activate_via_button
****************************/

const { start} = require("react");


//Variables
var username = "James";
var age = 26;

var year = 2026;
var dateofbirth = 2000;
let ageAdd = age + 10;
let money =1000;
let total = money / 2;
let equation = money / 2 + 3;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");





/****************************
  Main code
****************************/

OUTPUT.innerHTML = "<h1>ADDED BY JAVASCRIPT.</h1>";
OUTPUT.innerHTML += "<p>" + "Hello " + username + ", welcome!</p>";
OUTPUT.innerHTML += "<p>" + "Since you are so rich...." + "</p>";
OUTPUT.innerHTML += "<p>" + "CAN YOU BUY FRIED CHICKENNNNNNNNNNNNN?!" + "</p>";
OUTPUT.innerHTML += "<p>" + "Hi " + username + ", as of " + year + " you are " + age + " years old. You were born in " + dateofbirth + ". In 10 years you will be " + ageAdd + " and you have $" + money + " dollars. You spent half of your money, you now have $" + total + " dollars. Then you get $3, now you have $" + equation + " dollars." + "</p>";

console.log("Running t09_activate_via_button.js");

console.log("Hi " +username+ ", as of " + year + " you are " + age + " years old. You were born in " + dateofbirth + ". In 10 years you will be " + ageAdd + " and you have $" + money + " dollars. You spend half of your money, you now have $" + total + " dollars. Then you get $3, now you have $" + equation + " dollars." );

writeline("Welcome");

displayProduct("Chocolate Bar: ", 4);
displayProduct("Chips: ", 3);
displayProduct("Drink: ", 2.50);


/*************************** 
 Functions
***************************/ 
function writeline() {
  OUTPUT.innerHTML +="<p>Welcome to the shop</p>";
}

function displayProduct(_product,_price) {
    OUTPUT.innerHTML += "<p>" +_product + _price+ "$</p>" ;
   
}

function start(_button) {
OUTPUT.innerHTML += "ghhyrth"
}
