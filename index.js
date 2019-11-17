var express =require('express'); //extracting express from dependencies
var socket  =require('socket.io'); //extracting express from dependencies
 
var app=express(); //holding my app

var server= app.listen(8000,function(){
    console.log('server is listening on the port 8000');
}); //making a server listening on port number 8000

app.use(express.static('public'));// this is puting our html files on the server file ie index.js

var io=socket(server);// puting server as argument in variable io and socket is a function
io.on('connection',function(socket){
 socket.on("chat",function(data){
io.sockets.emit("chat",data);
 });//recieving data with the help of event and calling back function after recieving this function is showing dat to all the clients
socket.on("typing",function(data){
  socket.broadcast.emit("typing",data);
});

});// when connection is established it will call and excecute the function socket and on is method ans connection is event


