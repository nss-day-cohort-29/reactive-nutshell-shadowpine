const remoteUrl = "http://localhost:5002";

export default {
    getAll() {
        return fetch(`${remoteUrl}/articles`).then(r => r.json());
    },
    post(newArticle) {
        return fetch(`${remoteUrl}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        }).then(data => data.json())
    }
};