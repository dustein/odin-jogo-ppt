const teste = document.querySelector('#pedra');
teste.onclick = () => alert("clicou")

// function pcPlay() {
//   let gamePlays = ["pedra", "papel", "tesoura"];
//   let pcChoice = Math.floor(Math.random()*gamePlays.length);
//   // console.log("computador: " + gamePlays[pcChoice])
//   return gamePlays[pcChoice];
// };

// function playRound(computer, user) {
  
//   let jogada = `Computador jogou ${computer}, User jogou ${user}...`;

//   let userInput = user.toLowerCase().trim();
//   let result = [];

//   if (computer === 'pedra' && userInput === 'tesoura') {
//     result = [jogada, 1, "Pedra quebra a Tesoura. Voce PERDEU!"]
//   } else if (computer === 'pedra' && userInput === 'papel') {
//     result = [jogada, 2, "Papel enrola a Pedra. Voce GANHOU!"]
//   } else if (computer === 'papel' && userInput === 'tesoura') {
//     result = [jogada, 2, "Tesoura corta Papel. Voce GANHOU!"]
//   } else if (computer === 'papel' && userInput === 'pedra') {
//     result = [jogada, 1, "Papel enrola a Pedra. Voce PERDEU!"]
//   } else if (computer === 'tesoura' && userInput === 'pedra') {
//     result = [jogada, 2, "Pedra quebra a Tesoura. Voce GANHOU!"]
//   } else if (computer === 'tesoura' && userInput === 'papel') {
//     result = [jogada, 1, "Tesoura corta Papel. Voce PERDEU!"]
//   } else {
//     result = [jogada, 0, "Jogadas iguais. EMPATE!"]
//   }

//   return result
// }

// function game(computerInput, userInput) {
  
//   let computerScore = 0;
//   let userScore = 0;
//   let tieScore = 0;
//   for (i=1; i<999; i++) {
//     computerInput = pcPlay();
//     // userInput = prompt("Escolha: pedra  ou   papel  ou  tesoura ")
//     userInput = "pedra";

//     console.log(`Round ${i} !`)
//     let round = playRound(computerInput, userInput)
//     console.log(round[0], round[2])
//     // playRound(computerInput, userInput)
//     if (round[1] === 1) {
//       computerScore = computerScore + 1
//     } else if (round[1] === 2) {
//       userScore = userScore + 1
//     } else {
//       tieScore = tieScore + 1
//     }

//     if (computerScore == 5 || userScore == 5) {
//       i = 999
//     }
//     console.log(`Placar: Computador ${computerScore}, empate ${tieScore}, Voce ${userScore}`)
//     // playRound(computerInput, userInput)

//   }
//   console.log("Jogo Finalizado!")
// }

// let round = game()

// console.log(round)
