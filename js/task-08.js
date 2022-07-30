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
