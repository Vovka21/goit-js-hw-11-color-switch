const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startButton.addEventListener('click', startSwitchColors);
stopButton.addEventListener('click', stopSwitchColors);

function startSwitchColors() {
  startButton.disabled = true;

  // if (timerId) {
  //   return;
  // }

  timerId = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
}

function stopSwitchColors() {
  startButton.disabled = false;
  clearInterval(timerId);
}
