const remoteUrl = "http://localhost:5002";

export default {
    getAll() {
        return fetch(`${remoteUrl}/messages`)
            .then(response => response.json());
    },
    get(id) {
        return fetch(`${remoteUrl}/messages/${id}`)
            .then(response => response.json());
    },
    post(messageObj) {
        return fetch(`${remoteUrl}/messages/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        });
    },
    delete(id) {
        return fetch(`${remoteUrl}/messages/${id}`, {
            method: "DELETE"
        });
    },
    put(messageObj, id) {
        return fetch(`${remoteUrl}/messages/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
        .then(() => fetch(`${remoteUrl}/animals`))
    }
}