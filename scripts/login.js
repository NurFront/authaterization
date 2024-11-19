function login(event) {
    event.preventDefault();
    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.name === name && user.password === password);

    if (user) {
        alert('Вы успешно вошли!');
        window.location.href = 'index.html';
    } else {
    }
}

const errors = document.getElementById('txt')
const names = document.getElementById('username')
const pass = document.getElementById('password')
document.getElementById('btns').addEventListener('click', function() {
    if(names.value === ''){
        errors.style.display = 'block'
        names.style.border = '1px solid red'
        pass.style.border = '1px solid red'
    } else {
        errors.style.display = 'none'
        names.style.border = '1px solid #000'
        pass.style.border = '1px solid #000'
    }
})