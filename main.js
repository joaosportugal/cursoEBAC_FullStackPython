document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name');
    const avatar = document.querySelector('#avatar');
    const username = document.querySelector('#username');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const profileLink = document.querySelector('#profile-link');

    fetch('https://api.github.com/users/joaosportugal')
    .then(function(answer) {
        return answer.json();
    })
    .then(function(json) {
        name.innerText = json.name;
        avatar.src = json.avatar_url; 
        username.innerText = json.login;
        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        profileLink.href = json.html_url
    })
})