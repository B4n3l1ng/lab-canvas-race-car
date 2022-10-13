const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
const road = new Image();
road.src ="./images/road.png"
const car = new Image();
car.src ="./images/car.png"
const carStartY = canvas.width / 2 - 35
let carMovement = 0;
const carSpeed = 5;
let carY = carStartY

const isGameOver = false;


const startCar = () => {
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
}

const moveCar =() => {
  if (carY + carMovement <= canvas.width - 70 && carY + carMovement >=0) {
    carY += carMovement
  }
}





function startGame() {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(car, carY, 500, 70, 130)
  moveCar();
  
  let gameId = 0;
  if (isGameOver) {
    cancelAnimationFrame(gameId)
  } else {
    gameId = requestAnimationFrame(startGame)
  }
} 




window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    startCar();
    
  };

  
};
