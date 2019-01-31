
const remoteUrl = "http://localhost:5002";

export default {
    getAll() {
        return fetch(`${remoteUrl}/articles?_expand=user`).then(r => r.json());
    },
    post(newArticle) {
        return fetch(`${remoteUrl}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        }).then(data => data.json())
    },
    delete(articleId) {
        return fetch(`${remoteUrl}/articles/${articleId}`, {
            method: "DELETE"
        }).then(r => r.json())
    }
};