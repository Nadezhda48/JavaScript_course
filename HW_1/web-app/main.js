const gitHubUsers= "https://api.github.com/users";

async function getUsers(){
    const request = await fetch(gitHubUsers);
    const listOfUsers = await request.json();
    return listOfUsers;
} 

async function getUsersLogin(){
    let users = await getUsers();
    let html = "";

    users.forEach(user => {
        let htmlContainer = `
        <div class='user' user-login="${user.login}">
            <img src="${user.avatar_url} user-login="${user.login}">
            <h2>${user.login}</h2>
            <h2>${user.repos_url}</h2>
            </div>
        `;

        html += htmlContainer;
    });

    const container = document.getElementById('listOfUsers');
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function(){
    getUsersLogin();
}, false);