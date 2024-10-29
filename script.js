function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
        return name + " plays banjo";
      } else {
        return name + " does not play banjo";
      }
}

console.log(areYouPlayingBanjo("Rachel")); 
console.log(areYouPlayingBanjo("Mark"));


const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
function chineseZodiac(year) {
 
  const cycleYear = year - 1924;
  const animal = animals[cycleYear % 12];
  const element = elements[Math.floor((cycleYear % 10) / 2)];
  return `${element} ${animal}`;
}

console.log(chineseZodiac(1998));
console.log(chineseZodiac(2024));
console.log(chineseZodiac(1984));

function getRow(N) {
  const rowIndex = (N - 1) % 26;
  const startChar = String.fromCharCode(65 + rowIndex);
  const remainingPart = String.fromCharCode(65 + rowIndex + 1).padEnd(26 - (rowIndex + 1), '', (i) => String.fromCharCode(65 + i));
  return repeatingPart + remainingPart;
} 

function rockPaperScissors(player1, player2) {
  if (player1 === player2) return "Draw!";
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}


console.log(rockPaperScissors("scissors", "paper")); 
console.log(rockPaperScissors("scissors", "rock")); 
console.log(rockPaperScissors("paper", "paper"));