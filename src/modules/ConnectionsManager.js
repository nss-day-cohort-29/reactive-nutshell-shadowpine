// Author: Cole Bryant. Purpose: This component manages all fetch calls to the connections dataset

const remoteUrl = "http://localhost:5002";

export default {
    getAll() {
        return fetch(`${remoteUrl}/connections`)
            .then(response => response.json());
    },
    getEmbed(embedValue) {
        return fetch(`${remoteUrl}/connections?_expand=${embedValue}`)
            .then(response => response.json());
    },
    post(connectionObj) {
        return fetch(`${remoteUrl}/connections/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(connectionObj)
        });
    },
    delete(id) {
        return fetch(`${remoteUrl}/connections/${id}`, {
            method: "DELETE"
        });
    }
}