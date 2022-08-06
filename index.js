function loadUsers() {
  fetch("users.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      displayUsers(users);
    });
}

function displayUsers(users) {
  for (i = 0; i < users.length; i++) {
    document.getElementById("tbody").innerHTML += `<tr>
      <td>${users[i].name}</td>
      <td>${users[i].lastName}</td> 
      <td><a href="${users[i].link}">Link</a></td>
      <td>${users[i].projectURL}</td>
      </tr>`;
  }
}

loadUsers();
