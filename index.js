'use strict';

const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;

const express = require('express'); 
const app = express(); //need this to launch express

const server = http.createServer(app);

server.listen(port, hostname, function(){
    console.log(`Server running at: http://${hostname}:${port}`)
});

const rootController = function(req, res) {
    const snippet = "<h1>Hello World</h1>";
    res.status(200).send(snippet).end();

}
// One way of adding a route
const catsController = function(req, res) {
    const snippet = "<h1>Meow</h1>";
    res.status(200).send(snippet).end();
}

app.get('/', rootController);
app.get('/cats', catsController);
// Another way of adding a route
app.get('/dogs', (req, res) =>{
    res.send('<h1>Woof!</h1>');
});
app.get('/cats_and_dogs', (req, res) => {
    res.send('<h1>Dogs and cats living together...mass hysteria!</h1>');
});

app.get('/greet/:handle', (req, res) => {
    const { handle } = req.params;
    res.send(`<h1>Hello, ${handle}!</h1>`);
});