export function getRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * choices.length)];
}

export function getWinner(choice, computerChoice) {

  if (choice === computerChoice) return 'draws';
  else if (
      (computerChoice === 'scissors' && choice === 'rock')  || (computerChoice === 'paper' && choice === 'scissors') || (computerChoice === 'rock' && choice === 'paper')
    )
  return 'wins';

  else return 'losses';
}
