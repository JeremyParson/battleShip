let grid = new Array(10);
let battleShipPos = new Array(10);

// 62x62
function setup () { //Jeremy A
  createCanvas(621, 621);
  background(0);

  intitializeGrid();
  
  renderGrid();
  battleShips();
}

function intitializeGrid () { //Jeremy P
  for (let x = 0; x < 10; x++) {
    grid[x] = new Array(10);
  }

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      grid[x][y] = false;
      console.log(grid[x][y]);
    }
  }
}

function renderGrid () { //Jeremy A
  fill(0, 0, 255)
  rectMode(CORNER)
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      rect(x * 62, y * 62, 62, 62)
    }
  }
}

function randomNumPos (maxInt) { //Jeremy P
  return Math.floor(Math.random() * maxInt + 1);
}

function battleShips () { //Jeremy P
  for (let x = 0; x < battleShipPos.length; x++) {
    battleShipPos[x] = new Array(2);
  }

  for (let x = 0; x < battleShipPos.length; x++) {
    let rng = Math.floor(random(10));
    let rng2 = Math.floor(random(10));
    // BattleShip x y positions

    if (grid[rng][rng2] == false) {
      battleShipPos[x][0] = rng;
      battleShipPos[x][1] = rng2;
      // Grid

      grid[rng][rng2] = true;

      fill(0)
      rect(battleShipPos[x][0] * 62, battleShipPos[x][1] * 62, 62, 62);
      console.log(battleShipPos[x] + ' Battleship placed! ' + x);
    }else {
      console.log('A battle ship had to be moved...');
      x--;
    }
  }
}
function mouseClicked () { //Jeremy P and Jeremy A
  let xIndex = Math.floor(mouseX / 62);
  let yIndex = Math.floor(mouseY / 62);
  console.log('(' + xIndex + ',' + yIndex + ')');

  if (grid[xIndex][yIndex] == true) {
    console.log("You've hit a ship!")
    document.getElementById("Hit").innerHTML = "You Hit A Ship";
    fill(255, 0, 0);
    rect(xIndex * 62, yIndex * 62, 62, 62);
  }else {
    console.log('You missed!');
    document.getElementById("Hit").innerHTML = "You Missed";
    fill(255);
    rect(xIndex * 62, yIndex * 62, 62, 62);
  }
}
