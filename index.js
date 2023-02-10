//const myForm = document.getElementById("myForm");
const containerResponse = document.getElementById("containerResponse");
const getText = document.getElementById("getText");
const getApiData = document.getElementById("getApiData");
const postApi = document.getElementById("postApi");

getText.addEventListener("click", getUsers);
getApiData.addEventListener("click", getUsers);
postApi.addEventListener("click", postUsers);

function getUsers() {
    fetch("https://test-works.pr-uni.ru/api/login", {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        }
    })
        .then(resp => resp.json())
        .then(resp => r_getData(resp))
}
function postUsers() {
    fetch("https://test-works.pr-uni.ru/api/login", {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:
            JSON.stringify({ title: 'thetitle', body: 'thebody' })
    })
        .then(resp => resp.json())
        .then(resp => r_postData(resp))
}

function r_getData(resp) {
    containerResponse.innerHTML = "";
    resp.forEach(i => {
        containerResponse.innerHTML +=
            `<ul class="list-group mb-3">
          <li class="list-group-item">${i.name}</li>
          <li class="list-group-item">${i.email}</li>
       </ul>`;
    })
}
function r_postData(resp) {
    containerResponse.innerHTML =
        `<h5>Your post was done successfully</h5>
        <ul class="list-group">
          <li class="list-group-item">Your title = ${resp.title}</li>
          <li class="list-group-item">Your body = ${resp.body}</li>
          <li class="list-group-item">Your Id = ${resp.id}</li>
        </ul>`;
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

