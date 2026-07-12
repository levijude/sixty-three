let stuff = 0
const stuffthing = document.getElementById("stuff")
function updatestuff() {
		stuffthing.textContent = `stuff: ${stuff}`;
}
clickButton.addEventListener("click", (event) => {
	score += clickValue;
	updateScore();
