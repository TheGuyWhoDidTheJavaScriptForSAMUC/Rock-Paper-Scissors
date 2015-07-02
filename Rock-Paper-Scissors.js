var computerChoice = "";
var userChoice = "";
function computerThink() {
	computerChoice = Math.floor(Math.random()*3);
	if(computerChoice === 1) {
		computerChoice = "rock";
	}
	else if(computerChoice === 2) {
		computerChoice = "paper";
	}
	else {
		computerChoice = "scissors";
	}
}

function rockPick() {
	userChoice = "rock";
	computerThink();
	results();
	replay();
	function rock() {
		document.getElementById("rock").innerHTML = results;
	}
}

function paperPick() {
	userChoice = "paper";
	computerThink();
	results();
	replay();
}

function scissorsPick() {
	userChoice = "scissors";
	computerThink();
	results();
	replay();
}

function compare(choice1, choice2) {
	if (choice1 === choice2) {
		alert("It's a tie!");
	}
	else if(choice1 === "rock") {
		if (choice2 === "scissors") {
			alert("You Win!");
		}
	}
	else if(choice1 === "paper") {
		if (choice2 === "rock") {
			alert("You Win!");
		}
	}		
	else if(choice1 === "scissors") {
		if (choice2 === "paper") {
<<<<<<< HEAD
			alert("You Win!");
=======
			alert("You Win");
>>>>>>> origin/master
		}
	}
	
	else if(choice1 === "rock") {
		if (choice2 === "paper") {
			alert("You Lose");
		}
	}

	else if(choice1 === "scissors") {
		if (choice2 === "rock") {
			alert("You Lose");
		}
	}

	else if(choice1 === "paper") {
		if (choice2 === "scissors") {
			alert("You Lose");
		}
	}
}

function results() {
	alert("You chose " + userChoice + ". Computer chose " + computerChoice + ".");
	compare(userChoice, computerChoice);	
}
