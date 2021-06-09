var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io') (server);
var players = {};



 
app.use(express.static(__dirname));
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('A user connected');
    // create a new player and add it to our players object
    // with random location and team
    players[socket.id] = {
    rotation: 0,
    x: Math.floor(Math.random() * 700) + 50,
    y: Math.floor(Math.random() * 500) + 50,
    playerId: socket.id,
    team: (Math.floor(Math.random() * 2) == 0) ? 'red' : 'blue'
  };
    // send the players object to the new player
    socket.emit('currentPlayers', players);
    // update all other players of the new player
    socket.broadcast.emit('newPlayer', players[socket.id]);
 
    socket.on('disconnect', function () {
       console.log('A user disconnected');

       delete players[socket.id]
       io.emit('disconnected', socket.id);
    });
 });


server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});