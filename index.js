function loadUsers() {
  fetch("users.json")
    .then((r) => r.json())
    //.then(function (response) {
    // return response.json();
    //})
    .then((users) => {
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
  e.preventDefault();
  const promotion = $("input[name=promotion]").value;
  const Members = $("input[name=Members]").value;
  const Name = $("input[name=Name]").value;
  const URL = $("input[name=URL]").value;

  const user = {
    promotion: promotion,
    Members: Members,
    Name: Name,
    URL: URL,
  };
  console.warn("adauga in users.json", JSON.stringify(user));
}

function initEvents() {
  const form = document.getElementById("EditForm");
  form.addEventListener("submit", submitForm);
}

loadUsers();
initEvents();
