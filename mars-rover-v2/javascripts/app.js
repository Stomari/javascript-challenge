/* eslint-disable no-console */
/* eslint-disable default-case */
// Rover Object Goes Here
const rover1 = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

const rover2 = {
  direction: 'N',
  x: 9,
  y: 0,
  travelLog: [],
};

const rover3 = {
  direction: 'N',
  x: 0,
  y: 9,
  travelLog: [],
};
//
const grid = [
  [null, null, 'o', null, null, null, 'o', null, null, null],
  [null, null, null, 'o', null, null, null, null, 'o', null],
  [null, null, null, null, null, null, null, 'o', null, null],
  [null, 'o', 'o', null, null, null, null, null, null, null],
  [null, null, null, null, 'o', null, null, 'o', null, null],
  [null, null, null, null, null, null, null, null, 'o', 'o'],
  [null, null, 'o', null, null, null, null, 'o', null, null],
  [null, 'o', null, null, null, 'o', null, null, null, null],
  [null, null, 'o', null, 'o', null, null, null, null, null],
  [null, null, null, 'o', null, null, 'o', null, null, null],
];
//
let rover = [rover1, rover2, rover3];

let n = 0;

console.log('Use the function commands() with a string as argument to move the rover, where the string must only have f, b, r, l.');
console.log('Rover1 turn');

function colision() {
  for (let i = 0; i < rover.length; i += 1) {
    if (i !== n) {
      if (rover[n].x === rover[i].x && rover[n].y === rover[i].y) {
        return true;
      }
    }
  }
  return false;
}

function turnLeft() {
  console.log('turnLeft was called!');
  switch (rover[n].direction) {
    case 'N':
      rover[n].direction = 'W';
      console.log(`Rover${n + 1} is now facing ${rover[n].direction}`);
      break;
    case 'W':
      rover[n].direction = 'S';
      console.log(`Rover${n + 1} is now facing ${rover[n].direction}`);
      break;
    case 'S':
      rover[n].direction = 'E';
      console.log(`Rover${n + 1} is now facing ${rover[n].direction}`);
      break;
    case 'E':
      rover[n].direction = 'N';
      console.log(`Rover${n + 1} is now facing ${rover[n].direction}`);
      break;
  }
}

function turnRight() {
  console.log('turnRight was called!');
  switch (rover[n].direction) {
    case 'N':
      rover[n].direction = 'E';
      console.log(`Rover${n + 1} is now facing ${rover[n].direction}`);
      break;
    case 'E':
      rover[n].direction = 'S';
      console.log(`Rover${n + 1} is now facing ${rover[n].direction}`);
      break;
    case 'S':
      rover[n].direction = 'W';
      console.log(`Rover${n + 1} is now facing ${rover[n].direction}`);
      break;
    case 'W':
      rover[n].direction = 'N';
      console.log(`Rover${n + 1} is now facing ${rover[n].direction}`);
      break;
  }
}

function moveForward() {
  console.log('moveForward was called');
  let colisionTest;
  switch (rover[n].direction) {
    case 'N':
      rover[n].x -= 1;
      colisionTest = colision();
      if (rover[n].x < 0) {
        rover[n].x += 1;
        console.log("You can't go this way!");
      } else if (grid[rover[n].x][rover[n].y] === 'o') {
        rover[n].x += 1;
        console.log("There's an obstacle ahead. You can't go this way!");
      } else if (colisionTest === true) {
        rover[n].x += 1;
        console.log('You hit another rover!');
      }
      break;
    case 'W':
      rover[n].y -= 1;
      colisionTest = colision();
      if (rover[n].y < 0) {
        rover[n].y += 1;
        console.log("You can't go this way!");
      } else if (grid[rover[n].x][rover[n].y] === 'o') {
        rover[n].y += 1;
        console.log("There's an obstacle ahead. You can't go this way!");
      } else if (colisionTest === true) {
        rover[n].y += 1;
        console.log('You hit another rover!');
      }
      break;
    case 'S':
      rover[n].x += 1;
      colisionTest = colision();
      if (rover[n].x > 9) {
        rover[n].x -= 1;
        console.log("You can't go this way!");
      } else if (grid[rover[n].x][rover[n].y] === 'o') {
        rover[n].x -= 1;
        console.log("There's an obstacle ahead. You can't go this way!");
      } else if (colisionTest === true) {
        rover[n].x -= 1;
        console.log('You hit another rover!');
      }
      break;
    case 'E':
      rover[n].y += 1;
      colisionTest = colision();
      if (rover[n].y > 9) {
        rover[n].y -= 1;
        console.log("You can't go this way!");
      } else if (grid[rover[n].x][rover[n].y] === 'o') {
        rover[n].y -= 1;
        console.log("There's an obstacle ahead. You can't go this way!");
      } else if (colisionTest === true) {
        rover[n].y -= 1;
        console.log('You hit another rover!');
      }
      break;
  }
}

function moveBackward() {
  console.log('moveBackward was called');
  let colisionTest;
  switch (rover[n].direction) {
    case 'N':
      rover[n].x += 1;
      colisionTest = colision();
      if (rover[n].x > 9) {
        rover[n].x -= 1;
        console.log("You can't go this way!");
      } else if (grid[rover[n].x][rover[n].y] === 'o') {
        rover[n].x -= 1;
        console.log("There's an obstacle ahead. You can't go this way!");
      } else if (colisionTest === true) {
        rover[n].x -= 1;
        console.log('You hit another rover!');
      }
      break;
    case 'W':
      rover[n].y += 1;
      colisionTest = colision();
      if (rover[n].y > 9) {
        rover[n].y -= 1;
        console.log("You can't go this way!");
      } else if (grid[rover[n].x][rover[n].y] === 'o') {
        rover[n].y -= 1;
        console.log("There's an obstacle ahead. You can't go this way!");
      } else if (colisionTest === true) {
        rover[n].y -= 1;
        console.log('You hit another rover!');
      }
      break;
    case 'S':
      rover[n].x -= 1;
      colisionTest = colision();
      if (rover[n].x < 0) {
        rover[n].x += 1;
        console.log("You can't go this way!");
      } else if (grid[rover[n].x][rover[n].y] === 'o') {
        rover[n].x += 1;
        console.log("There's an obstacle ahead. You can't go this way!");
      } else if (colisionTest === true) {
        rover[n].x += 1;
        console.log('You hit another rover!');
      }
      break;
    case 'E':
      rover[n].y -= 1;
      colisionTest = colision();
      if (rover[n].y < 0) {
        rover[n].y += 1;
        console.log("You can't go this way!");
      } else if (grid[rover[n].x][rover[n].y] === 'o') {
        rover[n].y += 1;
        console.log("There's an obstacle ahead. You can't go this way!");
      } else if (colisionTest === true) {
        rover[n].y += 1;
        console.log('You hit another rover!');
      }
      break;
  }
}

function commands(list) {
  let validation = true;

  for (let i = 0; i < list.length; i += 1) {
    const sequence = list[i];
    if (sequence === 'f' || sequence === 'b' || sequence === 'r' || sequence === 'l') {
      continue;
    } else {
      console.log(
        `${sequence} is not a command. Please enter only the letters f, b, r or l.`,
      );
      validation = false;
      return;
    }
  }

  if (validation === true) {
    for (let i = 0; i < list.length; i += 1) {
      const sequence = list[i];
      if (sequence === 'f') {
        moveForward();
        rover[n].travelLog.push(`[${rover[n].x},${rover[n].y}]`);
      } else if (sequence === 'r') {
        turnRight();
      } else if (sequence === 'l') {
        turnLeft();
      } else if (sequence === 'b') {
        moveBackward();
        rover[n].travelLog.push(`[${rover[n].x},${rover[n].y}]`);
      } else {
        console.log(`${sequence} is not a command.`);
      }
    }
  }
  console.log(`You've been at ${rover[n].travelLog}.`);

  switch (n) {
    case 0:
      n = 1;
      break;
    case 1:
      n = 2;
      break;
    case 2:
      n = 0;
      break;
  }

  console.log(`Rover${n + 1} turn.`);
}
