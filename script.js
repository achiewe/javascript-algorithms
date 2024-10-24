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
