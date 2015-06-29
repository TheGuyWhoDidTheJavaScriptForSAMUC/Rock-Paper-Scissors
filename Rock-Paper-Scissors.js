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
function rockPick