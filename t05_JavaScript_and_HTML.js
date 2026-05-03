/* Paste your code from task 3, Maths here */
/****************************
Name of task: Javascript and HTML
****************************/


//Variables
var username = "James";
var age = 26;

var year = 2026;
var dateofbirth = 2000;
let ageAdd = age + 10;
let money =1000;
let total = money / 2;
let equation = money / 2 + 3;

/****************************
  Main code
****************************/
console.log("Running t05_JavaScript_and_HTML.js");

console.log("Hi " +username+ ", as of " + year + " you are " + age + " years old. You were born in " + dateofbirth + ". In 10 years you will be " + ageAdd + " and you have $" + money + " dollars. You spend half of your money, you now have $" + total + " dollars. Then you get $3, now you have $" + equation + " dollars." );

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML = "<p>Hello " + username + "</p>";
OUTPUT.innerHTML = "<p>Second Paragraph Line.</p>";
OUTPUT.innerHTML = "<p>Third Paragraph Line.</p>";



/*************************** 
 Functions
***************************/ 