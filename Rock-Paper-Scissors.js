function computerThink() {
	computerChoice = Math.floor(Math.random()*1);
	if(computerChoice ===1) {
		computerChoice = "rock";
	}
	else if(computerChoice === 0.5){
		computerChoice = "paper";
	}
	else{
		computerChoice = "scissors";
	}
};

function compare(choice1, choice2) {
	if (choice1 === choice2) {
	alert("The result is a tie!")
	}
	else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			alert("You win")
		}
		else {
			alert("You lose")
		}
	}
}