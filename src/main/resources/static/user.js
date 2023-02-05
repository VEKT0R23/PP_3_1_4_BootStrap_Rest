const urlUser = 'http://localhost:8080/api/user/'
let loggedInUser = document.querySelector('#UserInfo');
let loggedUser = document.querySelector('#navBarUser')

fetch(urlUser)
    .then(res => res.json())
    .then(data => {
        loggedUser.innerHTML = `
                <span class="align-middle mr-1">${data.email}
                with roles: ${data.roles.map(role => role.roleName === 'ROLE_ADMIN' ? ' ADMIN' : ' USER')} </span>
                `;
        loggedInUser.innerHTML = `
                                <td>${data.id}</td>
                                <td>${data.username}</td>
                                <td>${data.surname}</td>
                                <td>${data.age}</td>
                                <td>${data.email}</td>
                                <td>${data.roles.map(role => role.roleName === 'ROLE_ADMIN' ? 'ADMIN' : 'USER')}</td>
                                `;
    })