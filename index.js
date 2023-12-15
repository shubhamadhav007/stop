document.getElementById('fetchUsersBtn').addEventListener('click',fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
    .then( response => response.json())
    .then (aman =>
        {
            let output= '' ;
            console.log (aman.data);
            aman.data.forEach(user => {
                output += `
                <div class="user-card">
                <img src ="${user.avatar} " alt="User Avatar " >
                <div class="user-details">
                <span class="name"> ${user.first_name} </span>
                <span class="email"> ${user.email} </span>
                </div>
                </div>
                `;
            });
            document.getElementById('userList').innerHTML = output ;

        })
        .catch(error =>{
            console.error("there was an error fetching users :", error);
        });
}