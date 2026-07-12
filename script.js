let stuff = 0
let sbvalue = 1;
let stuffbetterers = 0;
let sbcost = 50;
let sbmult = 1;
let sbmultinc = 0.25;
let clickValue = 1;
const stuffthing = document.getElementById("stuffamt");
const sbthing = document.getElementById("sb");
const stuffbutton = document.getElementById("stuff");
const sbbutton = document.getElementById("stuffbetterer");
function updatestuff() {
		stuffthing.textContent = `stuff: ${stuff}`;
}
function updatesb() {
		sbthing.textContent = `Stuff Betterers: ${stuffbetterers} multiplying stuff gain by x${sbmult}`;
}
stuffbutton.addEventListener("click", (event) => {
	stuff += clickValue * sbmult;
	updatestuff();
}) 
sbbutton.addEventListener("click", (event) => {
	if (stuff >= sbcost) {
		stuff -= sbcost;
		stuffbetterers += sbvalue;
		sbcost *= 1.333;
		sbmult += sbmultinc;
		sbbutton.textContent = `purchase a Stuff Betterer for ${sbcost} stuff`;
		updatestuff();
		updatesb();
	}
}) 
