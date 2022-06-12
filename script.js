
function pcPlay() {
  let gamePlays = ["pedra", "papel", "tesoura"];
  let pcChoice = Math.floor(Math.random()*gamePlays.length);
  // console.log("computador: " + gamePlays[pcChoice])
  return gamePlays[pcChoice];
};

function playRound(computer, userInput) {

  let user = userInput.toLowerCase().trim();
  let jogadas = `Você escolheu ${user}, o computador escolheu ${computer}... `
  if (computer === "pedra" && user === "papel") {
    return jogadas + "user GANHOU! Papel enrola Pedra!"
  } else if (computer === "pedra" && user === "tesoura") {
    return jogadas + "computer VENCEU! Pedra quebra a Tesoura"
  } else if (computer === "papel" && user === "pedra") {
    return jogadas + "computer VENCEU! Papel enrola a Pedra"
  } else if (computer === "papel" && user === "tesoura") {
    return jogadas + "user GANHOU! Tesoura corta Papel"
  } else if (computer === "tesoura" && user === "papel") {
    return jogadas + "computer VENCEU! Tesoura corta Papel"
  } else if (computer === "tesoura" && user === "pedra") {
    return jogadas + "user GANHOU! Pedra quebra a Tesoura"
  } else {
    return jogadas + "Deu EMPATE ! Escolheram a mesma aposta..."
  }
}

let computer = pcPlay();
let user = prompt("Escolha: pedra  ou   papel  ou  tesoura ")
let round = playRound(computer, user)

console.log(round)


// console.log(`jogada PC: ${pcPlay()}`)

// console.log("rodou")