//Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//Під час відправлення форми сторінка не повинна перезавантажуватися.
//Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
//Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
    evt.preventDefault();
    const { elements: {email, password } } = evt.currentTarget;
    if (email.value === '' || password.value === '') {
         alert('Please fill in all the fields!');
         return;
    }
    const formData = {};
    for (const element of evt.currentTarget.elements) {
        if (element.name) formData[element.name] = element.value;
    }
    console.log(formData);
    evt.currentTarget.reset(); 
    }
   
    