var playerchoice = 0;
var playerscore = 0;
var computerchoice = 0;
var computerscore = 0;
var winner = -1;

		document.getElementById("messages").innerHTML = 'Pedra, papel ou tesoura?';

function play(choice) {
	playerchoice = choice;

	computerchoice = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

	if(playerchoice == computerchoice){
		winner = 0;
	}
	else if(playerchoice == 1 && computerchoice == 2){
		winner = 2;
	}
	else if(playerchoice == 1 && computerchoice == 3){
		winner = 1;
	}
	else if(playerchoice == 2 && computerchoice == 1){
		winner = 1;
	}
	else if(playerchoice == 2 && computerchoice == 3){
		winner = 2;
	}
	else if(playerchoice == 3 && computerchoice == 1){
		winner = 2;
	}
	else if(playerchoice == 3 && computerchoice == 2){
		winner = 1;
	}


	document.getElementById("player-choice-1").classList.remove('selected');

	document.getElementById("player-choice-2").classList.remove('selected');

	document.getElementById("player-choice-3").classList.remove('selected');

	document.getElementById("computer-choice-1").classList.remove('selected');

	document.getElementById("computer-choice-2").classList.remove('selected');

	document.getElementById("computer-choice-3").classList.remove('selected');


	document.getElementById("player-choice-" + playerchoice).classList.add('selected');
	document.getElementById("computer-choice-" + computerchoice).classList.add('selected');

	if(winner == 0){
		document.getElementById("messages").innerHTML = 'Draw';	
		document.getElementById("messages").style.backgroundColor	= "#6b757d";
	}
	else if(winner == 1){
		document.getElementById("messages").innerHTML = 'You win';
		document.getElementById("messages").style.backgroundColor	= "#28a745";
		playerscore++;
	}
	else if(winner == 2){
		document.getElementById("messages").innerHTML = 'Computer win';
		document.getElementById("messages").style.backgroundColor	= "#dd4345";
		computerscore++;	
	}


	document.getElementById("player-score").innerHTML = playerscore;
	document.getElementById("computer-score").innerHTML = computerscore;

	if (playerscore == 5){
		alert('Você ganhou!');
		parent.window.document.location.href = '';
	}else if (computerscore == 5){
		alert('Computador ganhou!');
		parent.window.document.location.href = '';
	}
}


function jogar(player)
{
	document.getElementById("player-name").innerHTML = prompt('digite seu nome');
	if (document.getElementById("computer-name").innerHTML == ""){
		document.getElementById("computer-name").innerHTML = "Computador";
	}
}
document.addEventListener("DOMContentLoaded", function(event) { 
  jogar();
});
function hideShow(){
	document.getElementById("help").style.display = "block";
}
function hide(){
	document.getElementById("help").style.display = "none";
}