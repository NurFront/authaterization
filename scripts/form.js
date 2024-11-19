function saveData(event) {
    event.preventDefault(); 

    // Получаем значения полей и удаляем пробелы
    const name = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Проверяем, что поля не пустые
    if (name === '' || password === '') {
        return;
    }

    // Загружаем пользователей из localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Проверяем, существует ли пользователь с таким именем
    const userExists = users.some(user => user.name === name);

    if (userExists) {
        alert('Пользователь с таким именем уже существует!');
        return;
    }

    // Добавляем нового пользователя
    users.push({ name, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Данные сохранены!');
    window.location.href = 'index.html';
    updateTable();
}


function updateTable() {
    const tableBody = document.querySelector("#userTable tbody");
    tableBody.innerHTML = "";

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.password}</td>
        `;
        tableBody.appendChild(row);
    });
}

window.onload = () => {
    updateTable();
};

const errors = document.getElementById('txt')
const names = document.getElementById('username')
const pass = document.getElementById('password')
document.getElementById('btns').addEventListener('click', function() {
    const trimmedName = names.value.trim(); // Удаляем пробелы
    const trimmedPass = pass.value.trim();

    if (trimmedName === '' || trimmedPass === '') {
        errors.style.display = 'block';
        names.style.border = '1px solid red';
        pass.style.border = '1px solid red';
    } else {
        errors.style.display = 'none';
        names.style.border = '1px solid #000';
        pass.style.border = '1px solid #000';
    }
});
