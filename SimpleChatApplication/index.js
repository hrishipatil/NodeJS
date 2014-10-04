var app= require('express')();
var http=require('http').Server(app);

app.get('/', function(req,res){
 res.send('<h1> Simple Chat Application using NodeJS & express<h1>');
});

http.listen(3001, function(){
console.log('Listening on *:3001');

});