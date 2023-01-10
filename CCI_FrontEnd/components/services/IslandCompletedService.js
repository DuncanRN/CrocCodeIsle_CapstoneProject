const baseURL = 'http://localhost:8080/islandscompleted/';

const IslandCompletedService = {


    // currently this isnt' being called anywhere.
    // we need to copy from the user being added....?
    // ___
    addIslandCompleted(payload) {
        console.log("Payload before stringification = " + payload)
        console.log("JSON Stringified = " +JSON.stringify(payload))

        return fetch(baseURL, {
            method: 'POST',
            // body: JSON.stringify(payload),
            body: payload,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    },

};

export default IslandCompletedService;