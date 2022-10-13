const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
const road = new Image();
road.src ="../images/road.png"
const car = new Image();
car.src ="../images/car.png"
const carStartY = canvas.width / 2 - 35
let carMovement = 0;
const carSpeed = 5;
let carY = carStartY
const enemy = new Image ();
enemy.src ="../images/enemy.png"
const enemyWidth = 140;
const enemyHeight = 130;


const isGameOver = false;

const moveCar = () => {
  if (carY + carMovement <= canvas.width - 130 && carY + carMovement >=62) {
    carY += carMovement;
  }
}

let randomY;
let intervalId;
const spawnEnemy = () => {
    randomY = Math.floor(Math.random() * ((370 - 62 + 1)+62));
    ctx.drawImage(enemy, randomY, 0, enemyWidth, enemyHeight);
  }

  const spawnTimer = () => {
    if (!intervalId) {
      intervalId = setInterval(spawnEnemy,3000)
    }
  }



const stopSpawning = () => {
  clearInterval(intervalId);
  intervalId = null;
}

const animate = () => {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(car, carY, 500, 70, 130)
  moveCar();
  spawnTimer();
  let gameId = 0;
  if (isGameOver) {
    cancelAnimationFrame(gameId)
  } else {
    gameId = requestAnimationFrame(animate);
  }
}

function startGame() {
  const intro = document.querySelector(".game-intro");
  intro.style.display= "none"
  document.addEventListener('keydown', event => {
    if (event.key === "ArrowLeft") {
      carMovement = -carSpeed;
    }
    if (event.key === "ArrowRight") {
      carMovement = carSpeed;
    }
  })
  document.addEventListener('keyup',() => {
    carMovement = 0;
  })
  animate();
  
} 




window.onload = () => {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(car, carStartY, 500, 70, 130)
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  
};
