
let inputVal = document.querySelector('#validation-input');
let totalLenght = Number(inputVal.dataset.length);


inputVal.addEventListener('blur', InputBlur);
function InputBlur(event) {
if(event.currentTarget.value.length === totalLenght) {
  event.currentTarget.classList.add('valid');
  event.currentTarget.classList.remove('invalid');
} else {
  event.currentTarget.classList.add('invalid');
  event.currentTarget.classList.remove('valid');
}
};
