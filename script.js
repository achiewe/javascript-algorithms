// shallow copy
let originalArray = [1, 2, 3, 4];
let copiedArray = originalArray;
copiedArray[0] = 5;
console.log(originalArray);

// deep copy
let deeporiginal = [1, 2, 3, 4];
let deepCopy = [...deeporiginal];
deepCopy[0] = 8;
console.log(deeporiginal);

// high-order function example one
function doSomething(callBack) {
  console.log("i am doing something");
  callBack();
}

function sayHello() {
  console.log("hello");
}

console.log(doSomething(sayHello));

// high-order function example two
function createMultiplier(factor) {
  return function (number) {
    number * factor;
  };
}

// splice method

let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 0, "grape", "lemon"); // Now, fruits = ['apple', 'grape', 'lemon', 'orange']
console.log(fruits);

function* dithering(width, height) {
  const maxSize = Math.max(width, height);
  const size = Math.pow(2, Math.ceil(Math.log2(maxSize)));
  const sequence = generateSequence(size);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = sequence[(x % size) + (y % size) * size];
      if (index < width && index < height) {
        yield [index, size - index - 1];
      }
    }
  }
}

function generateSequence(size) {
  const sequence = new Array(size * size);

  let x = 0,
    y = 0,
    dx = 1,
    dy = 0,
    i = 0;

  while (i < size * size) {
    sequence[x + y * size] = i + 1;
    i++;

    const nx = x + dx;
    const ny = y + dy;

    if (
      nx < 0 ||
      nx >= size ||
      ny < 0 ||
      ny >= size ||
      sequence[nx + ny * size] !== undefined
    ) {
      const temp = dx;
      dx = -dy;
      dy = temp;
    }

    x += dx;
    y += dy;
  }
  return sequence;
}

function upsideDown(x, y) {
  const validUpsideDowns = ["0", "1", "6", "8", "9"];
  let count = 0;

  const lowerBound = BigInt(x);
  const upperBound = BigInt(y);

  for (let i = lowerBound; i <= upperBound; i++) {
    const numStr = i.toString();
    let upsideDownNum = "";

    for (let j = numStr.length - 1; j >= 0; j--) {
      const digit = numStr.charAt(j);
      if (!validUpsideDowns.includes(digit)) {
        upsideDownNum = "";
        break;
      }
      upsideDownNum += getUpsideDownEquivalent(digit);
    }

    if (upsideDownNum === numStr) {
      count++;
    }
  }
}

function getUpsideDownEquivalent(digit) {
  const upsideDownEquivalents = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };
  return upsideDownEquivalents[digit];
}

const x = "0";
const y = "25";
// console.log(upsideDown(x, y));

function trenchAssault(s) {
  const [groundLayer, trenchLayer] = s.split("\n");

  let frontline = "";
  let attackingPower = 0;

  for (let i = 0; i < groundLayer.length; i++) {
    const currentChar = groundLayer[i];
    if (/[wpbs]/.test(currentChar)) {
      attackingPower += getPower(currentChar);
      const nextChar = trenchLayer[i + 1];
      if (nextChar === "|") {
        const defenderPower =
          getPower(groundLayer[i + 1]) * (i % 5 === 0 ? 2 : 1);
        if (attackingPower > defenderPower) {
          frontline += "L";
          attackingPower -= defenderPower;
        } else if (attackingPower === defenderPower) {
          frontline += "L";
          attackingPower = 0;
        } else {
          frontline += "R";
          attackingPower = defenderPower - attackingPower;
        }
      }
    } else if (currentChar === "|") {
      frontline += "|";
    }
  }
  return frontline;
}

function getPower(letter) {
  const leftSidePowers = { w: 4, p: 3, b: 2, s: 1 };
  const rightSidePowers = { m: 4, q: 3, d: 2, z: 1 };

  return leftSidePowers[letter] || rightSidePowers[letter] || 0;
}

// add function runOff
function runOff(voters) {
  const voteCount = {};

  for (const ballot of voters) {
    const firstChoice = ballot[0];
    voteCount[firstChoice] = (voteCount[firstChoice] || 0) + 1;
  }
  const totalVotes = Object.values(voteCount).reduce(
    (total, count) => total + count,
    0
  );

  for (const candidate in voteCount) {
    if (voteCount[candidate] > totalVotes / 2) {
      return candidate;
    }
  }

  const leastVotes = Math.min(...Object.values(voteCount));
  const eliminatedCandidates = Object.keys(voteCount).filter(
    (candidate) => voteCount[candidate] === leastVotes
  );

  if (eliminatedCandidates.length === Object.keys(voteCount).length) {
    return undefined;
  }
  for (let i = 0; i < voters.length; i++) {
    for (const eliminatedCandidate of eliminatedCandidates) {
      const index = voters[i].indexOf(eliminatedCandidate);
      if (index !== -1) {
        voters[i].splice(index, 1);
      }
    }
  }
  return runoff(voters);
}
