import { WebSocketServer } from 'ws';
import rng from './rng.js';

/*
This is the server spin up for the rng service. A client
can connect to the server with the specified port. Sending
a message with the expected request format will return a
stringified JSON back to the client. Here is a sample of
request and response data :

------------------------ R E Q U E S T ------------------------
'{
    "min": 0,
    "max": 10,
    "randCount": 3
}'

----------------------- R E S P O N S E -----------------------
'{
    [3, 9, 8]
}'
*/

const port = 8082
const wsServer = new WebSocketServer({ port : port });

// Called on client connection
wsServer.on('connection', ws => {
    console.log(`new client connected on port ${port}`);

    // When a message is recieved
    ws.on('message', data => {
        let str = data.toString();
        const obj = JSON.parse(str);

        // Calculated the random numbers
        const rands = rng(obj.min, obj.max, obj.randCount);

        // Stringify result and send to client
        str = JSON.stringify(rands);
        ws.send(str);
    });

    ws.on('close', () => {
        console.log('client has disconnected');
    });
});