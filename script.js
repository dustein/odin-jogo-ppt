
function pcPlay() {
  let gamePlays = ["pedra", "papel", "tesoura"];
  let pcChoice = Math.floor(Math.random()*gamePlays.length);
  console.log("computador: " + gamePlays[pcChoice])
  return gamePlays[pcChoice];
};

function playRound(computer, userInput) {

  let user = userInput.toLowerCase().trim();

  if (computer === "pedra" && user === "papel") {
    console.log("user GANHOU! Papel enrola Pedra!");
    return 2
  } else if (computer === "pedra" && user === "tesoura") {
    console.log("computer VENCEU! Pedra quebra a Tesoura")
    return 1
  } else if (computer === "papel" && user === "pedra") {
    console.log("computer VENCEU! Papel enrola a Pedra")
    return 1
  } else if (computer === "papel" && user === "tesoura") {
    console.log("user GANHOU! Tesoura corta Papel")
    return 2
  } else if (computer === "tesoura" && user === "papel") {
    console.log("computer VENCEU! Tesoura corta Papel")
    return 1
  } else if (computer === "tesoura" && user === "pedra") {
    console.log("user GANHOU! Pedra quebra a Tesoura")
    return 2
  } else {
    console.log("Deu EMPATE ! Escolheram a mesma aposta...")
    return 3
  }
}

let computer = pcPlay();
let user = prompt("Escolha: pedra  ou   papel  ou  tesoura ")
let round = playRound(computer, user)

console.log(round)


// console.log(`jogada PC: ${pcPlay()}`)

// console.log("rodou")