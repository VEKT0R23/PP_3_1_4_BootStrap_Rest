on(document, 'click', '#edit-user', e => {
    const userInfo = e.target.parentNode.parentNode
    document.querySelector('#idEdit').value = userInfo.children[0].innerHTML
    document.getElementById('nameEdit').value = userInfo.children[1].innerHTML
    document.getElementById('lastnameEdit').value = userInfo.children[2].innerHTML
    document.getElementById('ageEdit').value = userInfo.children[3].innerHTML
    document.getElementById('emailEdit').value = userInfo.children[4].innerHTML
    document.getElementById('passwordEdit').value = userInfo.children[5].innerHTML
    document.getElementById('rolesEdit').value = userInfo.children[6].innerHTML
    $("#modalEdit").modal("show")
})

editUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: document.getElementById('idEdit').value,
            username: document.getElementById('nameEdit').value,
            surname: document.getElementById('lastnameEdit').value,
            age: document.getElementById('ageEdit').value,
            email: document.getElementById("emailEdit").value,
            password: document.getElementById('passwordEdit').value,
            roles: [
                document.getElementById('rolesEdit').value
            ]
        })
    }).then()
    $("#modalEdit").modal("hide")
    setTimeout(function () {
        refreshTable()
    }, 300);


})