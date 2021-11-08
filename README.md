# rng
 A microservice that produces random integers.

# Installation
From the rng directory run ```npm install``` which will download the required modules for running the server.
```test_client.js``` contains an example of how a request for the service can look, and how the response is handled.

*These formats are displayed in JSON, however, when sending and recieving the messages they will be stringified*
*This means you must decode the string to an object (or in this case, array) specified in your language before.
# Request Format
*Asking to generate a list of 3 random integers in the range [0, 10] (inclusive)*

```json
{
    "min": 0,
    "max": 10,
    "randCount": 3
}
```

# Response Format
*An array of integers*

```json
{
    [3, 9, 8]
}
```
