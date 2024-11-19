
function loadData() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const table = document.getElementById('userTable');

    users.forEach((user, index) => {
        const row = table.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = user.name;
        row.insertCell(2).textContent = user.password;
    });
}