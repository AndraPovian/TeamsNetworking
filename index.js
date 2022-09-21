function loadTeams() {
  fetch("http://localhost:3000/teams-json")
    .then((r) => r.json() )
    .then((teams) => {
      displayTeams(teams);
    });
}

function displayTeams(teams) {
  for (i = 0; i < teams.length; i++) {
    console.log(teams[i]);
    document.getElementById("tbody").innerHTML += `<tr>
      <td>${teams[i].promotion}</td>
      <td>${teams[i].members}</td>
      <td>${teams[i].name}</td>
      <td><a href="${teams[i].url}">link</a></td>
      <td> x e </td>
    </tr>`;
  }
}

function $(selector) {
  return document.querySelector(selector);
}

function submitform(e) {
  e.preventDefault();
  const promotion = $("input[name=promotion]").value;
  const members = $("input[name=members]").value;
  const name = $("input[name=name]").value;
  const url = $("input[name=url]").value;

  const team = {
    promotion: promotion,
    members: members,
    name: name,
    url: url,
  };
  console.warn("adauga in teams.json", JSON.stringify(team));
}

function initEvents() {
  const form = document.getElementById("editForm");
  console.warn("form", form);
  form.addEventListener("submit", submitform);
}

loadTeams();
initEvents();