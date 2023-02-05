const addName = document.getElementById('nameAdd')
const addLastName = document.getElementById('lastnameAdd')
const addAge = document.getElementById('ageAdd')
const addPassword = document.getElementById('passwordAdd')
const addRoles = document.getElementById('rolesAdd')
const addEmail = document.getElementById('emailAdd')

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}
addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: addName.value,
            surname: addLastName.value,
            age: addAge.value,
            email: addEmail.value,
            password: addPassword.value,
            roles: [
                addRoles.value
            ]
        })
    })
        .then(res => res.json())
        .then(data => {
            getAllUsers(data);
        })
    setTimeout(getAllUsers, 500);
    document.getElementById('usersTable').click()
    document.getElementById("newUserForm").reset()
});
