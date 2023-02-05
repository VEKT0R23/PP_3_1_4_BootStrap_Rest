on(document, 'click', '#delete-user', e => {
    const fila2 = e.target.parentNode.parentNode
    currentUserId = fila2.children[0].innerHTML

    document.getElementById('idDelete').value = fila2.children[0].innerHTML
    document.getElementById('nameDelete').value = fila2.children[1].innerHTML
    document.getElementById('lastnameDelete').value = fila2.children[2].innerHTML
    document.getElementById('ageDelete').value = fila2.children[3].innerHTML
    document.getElementById('emailDelete').value = fila2.children[4].innerHTML
    document.getElementById('rolesDelete').value = fila2.children[5].innerHTML
    $("#modalDelete").modal("show")
})

deleteUserForm.addEventListener('submit', (e) => {
    console.log(e.target.parentNode.parentNode)
    e.preventDefault();
    e.stopPropagation();
    fetch(url + currentUserId, {
        method: 'DELETE'
    })
        .then()

    $("#modalDelete").modal("hide")
    refreshTable()
})