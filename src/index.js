const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-action = start]'),
    btnStop: document.querySelector('[data-action = stop]'),
}
// console.log(refs);

refs.btnStart.addEventListener('click', onStartSlider);
refs.btnStop.addEventListener('click', onStopSlider);

let intervalId;

function onStartSlider(el) {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000)
    refs.btnStart.disabled = true;
}   

function onStopSlider(el) {
  clearInterval(intervalId);
  refs.btnStart.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};