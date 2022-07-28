let controlFont = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlFont.oninput = function() {
  text.style.fontSize = controlFont.value + "px";
};
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.addEventListener('input', events);
function events(event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
}


/*const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.addEventListener('input', events);
function events(event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
}*/