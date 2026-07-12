let stuff = 0
let clickValue = 1;
let stuffbetterers = 0;
const stuffthing = document.getElementById("stuffamt")
const sbthing = document.getElementById("
const stuffbutton = document.getElementById("stuff");
function updatestuff() {
		stuffthing.textContent = `stuff: ${stuff}`;
}
stuffbutton.addEventListener("click", (event) => {
	stuff += clickValue;
	updatestuff();
}) 
