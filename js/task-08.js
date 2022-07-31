//Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//Під час відправлення форми сторінка не повинна перезавантажуватися.
//Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
//Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector("form");
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    console.log(formData);
    formData.forEach((email, password) => {
        console.log(email);
        console.log(password)
    })
    const { elements: {email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("lease fill in all the fields");
    }
    console.log(`email: ${email.value}, password: ${password.value}`);
    event.currentTarget.reset();
}
