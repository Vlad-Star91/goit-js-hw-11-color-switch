// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const refs = {
//     body: document.querySelector('body'),
//     btnStart: document.querySelector('[data-action = start]'),
//     btnStop: document.querySelector('[data-action = stop]'),
// }
// // console.log(refs);

// refs.btnStart.addEventListener('click', onStartSlider);
// refs.btnStop.addEventListener('click', onStopSlider);

// let intervalId;

// function onStartSlider(el) {
//     intervalId = setInterval(() => {
//         refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
//     }, 1000)
//     refs.btnStart.disabled = true;
// }   

// function onStopSlider(el) {
//   clearInterval(intervalId);
//   refs.btnStart.disabled = false;
// }

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class ColorSwitch {
  constructor(colors, selector, size) {
    this.colors = colors;
    this.colorSwitch = document.querySelector(selector);
    this.intervalId = null;
    this.colorSwitch.querySelector(".container").style.width = size + "px";
    this.colorSwitch.querySelector(".container").style.height = size + "px";
    this.colorSwitch.querySelector("[data-action='start']").addEventListener("click", this.start);
    this.colorSwitch.querySelector("[data-action='stop']").addEventListener("click", this.stop);
    this.colorSwitch.querySelector("[data-action='stop']").disabled = true;
  }
  start = () => {
    this.colorSwitch.querySelector("[data-action='start']").disabled = true;
    this.colorSwitch.querySelector("[data-action='stop']").disabled = false;
    this.intervalId = setInterval(() => {

    const index = this.randomIntegerFromInterval(0, this.colors.length - 1);
      this.colorSwitch.querySelector(".container").style.background = this.colors[randomIntegerFromInterval(0, 5)];
    }, 1000)
    
  }
  randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  };
  stop = () => {
    clearInterval(this.intervalId);
    this.colorSwitch.querySelector("[data-action='start']").disabled = false;
    this.colorSwitch.querySelector("[data-action='stop']").disabled = true;
    this.colorSwitch.querySelector(".container").style.background = "white";
  };

  // for all random colors
  // getRandomColor = () => {
  //   return `rgb(${this.randomIntegerFromInterval(0,255)},${this.randomIntegerFromInterval(0,255)},${this.randomIntegerFromInterval(0,255)})`
  // }
}
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const colorSwitch = new ColorSwitch(colors, ".colorSwitch-1", 400);
// const colorSwitch2 = new ColorSwitch(colors, ".colorSwitch-2", 200);
console.log(colorSwitch);