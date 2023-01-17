const baseUsersURL = 'http://localhost:8080/users/';

const UserService = {

    async getAllUsers() {
        const response = await fetch(baseUsersURL)
        .then(res => res.json())
        .then(responseJSON => console.log('getAllUsers() result:', responseJSON));

        return response;
    },

    async getTop5Users() {
        const response = await fetch(baseUsersURL + "top5")
        .then(res => res.json())
        return response;
    },

    
    async addUser(payload) {
        // console.log("Payload before stringification = " + payload)
        // console.log("JSON Stringified = " + JSON.stringify(payload))

        return await fetch(baseUsersURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())


        
    },

    updateUser(user, name) {
        var stringedName = name.toString()

        console.log("In updateUser, user is about to be JSON.stringifi ed " + user);

        console.log(Object.keys(user));

        console.log("that was keys of user")

        console.log("user['name'] : " + user['name']);
        console.log("user['points'] : " + user['points']);

        // So user here is 
        // user= {
        //     'name' : 'Croc',
        //     'points' : 40
        // }
        // and we JSON.stringify that

        return fetch(baseUsersURL, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
        'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
    },

};

export default UserService;