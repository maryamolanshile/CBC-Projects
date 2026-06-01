// Create an array called colors containing:
// red
// blue
// green
// Print the second color.
// remove the last item
const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
// colors.push("pink");

console.log(colors[1]);
colors.pop();
console.log(colors);

// Print only even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
function printEvenNumbers(){

}

// dom manipulation
// let heading = document.querySelector("h1");
// let heading2 = document.querySelector("#heading-2");

// heading.addEventListener("mouseover", function(){
//     heading2.textContent = "Not DOM Manipulation";
//     heading2.style.color = "red";
//     heading2.style.fontSize = "30px";
// })

let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");

// hamburger.addEventListener("click", function(){
//     // console.log("Hamburger clicked");
//     hamburger.style.display = "none";
//     close.style.display = "block";
// })

let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", function(){
    hamburger.style.display = "none";
    close.style.display = "block";
});