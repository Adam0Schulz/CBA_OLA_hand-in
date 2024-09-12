
const form = document.getElementById('form');

const isEmailValid = email => email.split('@').length === 2 && email.split('.').length === 2;
const isUsernameValid = user => user.length > 3 && user.length < 15;
const isPasswordValid = pass => pass.length > 7;


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form)
    const formDataObject = Object.fromEntries(formData);

    if(!(isEmailValid(formDataObject.email)
        && isUsernameValid(formDataObject.username)
        && isPasswordValid(formDataObject.password))) alert('something went wrong')

});