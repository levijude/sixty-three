let stuff = 0
let clickValue = 1;
let sbvalue = 1;
let stuffbetterers = 0;
let sbcost = 50;
const stuffthing = document.getElementById("stuffamt");
const sbthing = document.getElementById("sb");
const stuffbutton = document.getElementById("stuff");
const sbbutton = document.getElementById("stuffbetterer");
function updatestuff() {
		stuffthing.textContent = `stuff: ${stuff}`;
}
function updatesb() {
		sbthing.textContent = `Stuff Betterers: ${stuffbetterers} multiplying stuff gain by x${stuffbetterers/4}`;
}
stuffbutton.addEventListener("click", (event) => {
	stuff += clickValue;
	updatestuff();
}) 
sbbutton.addEventListener("click", (event) => {
	if stuff >= sbcost {
		stuff -= sbcost;
		stuffbetterers += sbvalue;
		sbbutton.textContent = `purchase a Stuff Betterer for ${sbcost} stuff`;
	}
	updatesb();
}) 
