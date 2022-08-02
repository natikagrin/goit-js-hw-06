function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeCollorButton = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const bodyEl = document.querySelector('body');
colorValue.textContent = '#ffffff';
changeCollorButton.addEventListener('click', onCangeColorButton);

function onCangeColorButton(event) {
  event.preventDefault();
  
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValue.innerHTML = `${getRandomHexColor()}`;
  console.log(getRandomHexColor());

}

 