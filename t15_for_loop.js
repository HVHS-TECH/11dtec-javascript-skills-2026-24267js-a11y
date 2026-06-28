/* Paste your code from the last task */
console.log("Running t15_for_loop.js");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


function getBottleInput() {
  const BOTTLE_FIELD = document.getElementById("bottleField");
  let bottles = Number(BOTTLE_FIELD.value);

  OUTPUT.innerHTML = "<p>You chose " + bottles + " bottles of milk.</p>";
}


console.log("starting loop");
for (let count = 0; count < 10; count++) {
    console.log("current count: " + count);
}

console.log("Loop finished");

console.log("100 bottles of milk :");
for (let bottle = 100; bottle > 90; bottle--) {
    console.log(bottle + " bottles of milk on the wall,");
    console.log(bottle + " bottles of milk,");
    console.log("if one of those bottles should happen to fall...");

}

console.log("No more bottles of milk on the wall, no more bottles of milk.");