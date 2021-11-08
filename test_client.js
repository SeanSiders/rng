import WebSocket from "ws";

/*
This is a test client for testing index.js
*/

const ws = new WebSocket('ws://localhost:8082');

ws.addEventListener('open', () => {
    console.log('client connected');

    const testJson = '{"min": 1, "max": 10, "randCount": 3}';

    ws.send(testJson);

    ws.on('message', data => {
        console.log(data.toString());
    });
});