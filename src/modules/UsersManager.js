const remoteUrl = "http://localhost:5002";

export default {
    getAll() {
        return fetch(`${remoteUrl}/users`)
            .then(response => response.json());
    },
    get(id) {
        return fetch(`${remoteUrl}/users/${id}`)
            .then(response => response.json());
    },
    post(userObj) {
        return fetch(`${remoteUrl}/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        });
    },
    delete(id) {
        return fetch(`${remoteUrl}/users/${id}`, {
            method: "DELETE"
        });
    },
    put(userObj, id) {
        return fetch(`${remoteUrl}/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        });
    }
}