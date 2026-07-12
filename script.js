let stuff = 0
let sbvalue = 1;
let stuffbetterers = 0;
let sbcost = 50;
let sbmult = 1;
let sbmultinc = 0.75;
let clickValue = 1;
const stuffthing = document.getElementById("stuffamt");
const sbthing = document.getElementById("sb");
const stuffbutton = document.getElementById("stuff");
const sbbutton = document.getElementById("stuffbetterer");
function updatestuff() {
		stuffthing.textContent = `stuff: ${Math.round(stuff)}`;
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
		sbcost *= 1.64;
		sbmult += sbmultinc;
		sbbutton.textContent = `purchase a Stuff Betterer for ${Math.round(sbcost)} stuff`;
		updatestuff();
		updatesb();
	}
}) 
