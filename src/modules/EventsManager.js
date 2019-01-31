
const remoteUrl = "http://localhost:5002";

export default {
    getAll() {
        return fetch(`${remoteUrl}/events?_expand=user`).then(r => r.json())
    },
    delete(eventId) {
        return fetch(`${remoteUrl}/events/${eventId}`, {
            method: "DELETE"
        }).then(r => r.json())
    },
    post(newEvent){
        return fetch(`${remoteUrl}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        }).then(r => r.json())
    },
    put(eventId, eventObject) {
        return fetch(`${remoteUrl}/events/${eventId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        })
    }
}