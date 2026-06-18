/* Paste your code from the last task */
/****************************
Name of task: functions_returns.js
****************************/




//Variables
var username = "Rosie";
var age = 26;

var year = 2026;
var dateofbirth = 2000;
let ageAdd = age + 10;
let money =1000;
let total = money / 2;
let equation = money / 2 + 3;
var product = ChocolateBar = 4;
var moneyField = 1000;


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");



/****************************
  Main code
****************************/


OUTPUT.innerHTML = "<h1>ADDED BY JAVASCRIPT.</h1>";
OUTPUT.innerHTML += "<p>" + "Hello " + username + ", welcome!</p>";
OUTPUT.innerHTML += "<p>" + "Since you are so rich...." + "</p>";
OUTPUT.innerHTML += "<p>" + "CAN YOU BUY FRIED CHICKENNNNNNNNNNNNN?!" + "</p>";
OUTPUT.innerHTML += "<p>" + "Hi " + username + ", as of " + year + " you are " + age + " years old. You were born in " + dateofbirth + ". In 10 years you will be " + ageAdd + " and you have $" + money + " dollars. You spent half of your money, you now have $" + total + " dollars. Then you get $3, now you have $" + equation + " dollars." + "</p>";

console.log("Running t13_functions_return.js");

console.log("Hi " +username+ ", as of " + year + " you are " + age + " years old. You were born in " + dateofbirth + ". In 10 years you will be " + ageAdd + " and you have $" + money + " dollars. You spend half of your money, you now have $" + total + " dollars. Then you get $3, now you have $" + equation + " dollars." );

writeline("Welcome");

displayProduct("Chocolate Bar: ", 4);
displayProduct("Chips: ", 3);
displayProduct("Drink: ", 2.50);

displayWelcome(age);
getFormInput(money);
getFormInput(username);

/*************************** 
 Functions
***************************/ 

function welcome() {
  OUTPUT.innerHTML +="<h1>Welcome to the shop</h1>";
}
function writeline() {
  OUTPUT.innerHTML +="<p>Welcome to the shop</p>";
}

function displayProduct(_product,_price) {
    OUTPUT.innerHTML += "<p>" + _product + _price+ "$</p>" ;
   
}

function startie(){
OUTPUT.innerHTML += "Hi Angel"
}

function getFormInput () {
  const NAME_FIELD = document.getElementById("nameField");
  let username = NAME_FIELD.value;
  OUTPUT.innerHTML = "<p>Your name is" + username + "</p>";
}

function displayWelcome(){
const AGE_FIELD = document.getElementById("ageField");
console.log(AGE_FIELD)
let age = AGE_FIELD.value; 
OUTPUT.innerHTML = "<p>Your age is" + age + "years old.<p>";
}

function getFormInput(){
const MONEY_FIELD = document.getElementById("moneyField");
console.log(MONEY_FIELD)
let money = MONEY_FIELD.value; 
OUTPUT.innerHTML = "<p><br><br>You have $" + money + " in pocket money.<br><br><p>";
}




if (18 < age) {
  console.log("You are young");
}
else if (18== age) {
  console.log("You are an adult!!");
}
else {
  console.log("You are ancient");
}

function start() {
    welcome();
  displayProduct("ChocolateBar", 4);
  displayProduct("Chips", 3);
  displayProduct("drinks", 2.50);
  getusername();
  getage();
  getmoney();
}