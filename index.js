require('dotenv').config();

const express = require('express');

const app = express();


const server = require('http').createServer(app);

// const io = require('socket.io')(server);

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
app.use(require('./src/routes/index'));


// Server Run
server.listen(process.env.SERVER_PORT, () =>{

    console.log(`Server listen on port:${process.env.SERVER_PORT}`);
});


