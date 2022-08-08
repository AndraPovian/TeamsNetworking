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
  users.map(function (user) {
    document.getElementById("tbody").innerHTML += `<tr>
      <td>${user.name}</td>
      <td>${user.lastName}</td> 
      <td><a href="${user.link}">Link</a></td>
      <td>${user.projectURL}</td>
      <td>x e </td>
      </tr>`;
  });
  // for (i = 0; i < users.length; i++) {
  //   document.getElementById("tbody").innerHTML += `<tr>
  //     <td>${users[i].name}</td>
  //     <td>${users[i].lastName}</td>
  //     <td><a href="${users[i].link}">Link</a></td>
  //     <td>${users[i].projectURL}</td>
  //     <td>${users[i].x}</td>
  //     </tr>`;
  // }
}

function $(selector) {
  return document.querySelector(selector);
}

function submitForm(e) {
  console.warn("submit", e);
  e.preventDefault();
  var promotion = document.querySelector("input[name=promotion]").value;
  var Members = document.querySelector("input[name=Members]").value;
  var Name = document.querySelector("input[name=Name]").value;
  var URL = document.querySelector("input[name=URL]").value;

  var user = {
    promotion: promotion,
    Members: Members,
    Name: Name,
    URL: URL,
  };
  console.warn("adauga in users.json", JSON.stringify(user));
}

function initEvents() {
  var form = document.getElementById("EditForm");
  form.addEventListener("submit", submitForm);
}

loadUsers();
initEvents();
