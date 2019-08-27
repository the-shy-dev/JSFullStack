const express = require('express');
const server = express();

server.use(express.json());

//Define our port variable
const port = process.env.PORT || 5000;

//Instruct our server to listen fort connections on that port
server.listen(port, ()=> console.log(`\n Running on port ${port}\n`))

server.get('/', (req, res) => {
    res.send("Response received");
});