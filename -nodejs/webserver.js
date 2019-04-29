// from github SuperiorJT/twitch-bot-image-display
// https://github.com/SuperiorJT/twitch-bot-image-display/blob/master/webserver.js

var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var fs      = require('fs');
var http    = require('http').Server(app);
var io      = require('socket.io')(http);

io.on('connection', function(socket){
  console.log("client connected");
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/chatReact', function (req, res) {
    console.log(req.body);
  io.emit('event', req.body);
  res.status(200).end();
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});