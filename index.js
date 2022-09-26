let allTeams = [];
let editId;


function loadTeams() {
  fetch("http://localhost:3000/teams-json")
    .then((r) => r.json() )
    .then((teams) => {
      allTeams = teams;
      displayTeams(teams);
    });
}

function displayTeams(teams) {
  document.getElementById("tbody").innerHTML = "";
  for (i = 0; i < teams.length; i++)  {
    document.getElementById("tbody").innerHTML += `<tr>
      <td>${teams[i].promotion}</td>
      <td>${teams[i].members}</td>
      <td>${teams[i].name}</td>
      <td><a href="${teams[i].url}" target="_blank">link</a></td>
  
      <td> 
        <a href="#" data-id="${teams[i].id}" class="delete-btn">❌</a>
        <a href="#" data-id="${teams[i].id}" class="edit-btn">✏️</a>
      </td> 
    </tr>`;
  }
}


function $(selector) {
  return document.querySelector(selector);
}

function createTeamRequest(team){
  return fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(team),
  }).then((r) => r.json());
}

function removeTeamRequest (id) {  
  return fetch("http://localhost:3000/teams-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id: id})    
  }).then(r => r.json());
}

function getFormValues() {
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
}

function setFormValues(team) {
  $("input[name=promotion]").value = team.promotion;
  $("input[name=members]").value = team.members;
  $("input[name=name]").value = team.name;
  $("input[name=url]").value = team.url;
  
}

function submitform(e) {
  e.preventDefault();
  
  const team = getFormValues();

  if (editId) {
    console.warn("pls edit", editId, team);
  } else {
    createTeamRequest(teams)
    .then((r) => r.json())
    .then(status => {
      console.warn('status', status);
      if (status.success){
        location.reload();
      }    
    });

  }
}

function startEditTeam(id) {
  const teams = allTeams.find((team) => team.id === id);
  setFormValues(teams);
  editId = id;
}

function initEvents() {
  const form = document.getElementById("editForm");  
  form.addEventListener("submit", submitform);

  form.querySelector("tbody").addEventListener("click", (e) => {    
    if (e.target.matches("a.delete-btn")) {
      const id = e.target.getAttribute("data-id");
      removeTeamRequest(id).then(status => {        
        if(status.success) {
          loadTeams();
        }
      });
        
    } else if (e.target.matches("a.edit-btn")) {
      const id = e.target.getAttribute("data-id");
      startEditTeam(id)
    }
      });
  };

  


loadTeams();
initEvents();