function vaporwave(sentence) {
    return sentence
        .toUpperCase()           
        .split('')            
        .filter(char => char !== ' ') 
        .join('  '); 
}

console.log(vaporwave("Lets go to the movies")); 
console.log(vaporwave("Why isn't my code working?"));

function cuckooTime(initial_time, n) {
    const [initialHours, initialMinutes] = initial_time.split(':').map(Number);
    let totalChimes = 0;
    let currentHours = initialHours;
    let currentMinutes = initialMinutes;
}

function findParetoFront(points) {
    let paretoFront = new Set();

    points.forEach((point, index) => {
        let isDominated = false;

        points.forEach((otherPoint, otherIndex) => {
            if (index !== otherIndex && dominates(otherPoint, point)) {
                isDominated = true;
            }
        });

        if (!isDominated) {
            paretoFront.add(point);
        }
    });

    return paretoFront;
}

function getRandomJoke() {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "What do you call fake spaghetti? An impasta!",
      "Why did the math book look sad? Because it had too many problems.",
      "Why don't skeletons fight each other? They don't have the guts!",
      "What did the ocean say to the beach? Nothing, it just waved."
    ];
  
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }