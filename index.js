var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http)

app.get('/',(req,res)=>{
    res.sendfile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    console.log('a user connected')
    socket.on('chat message', msg => io.emit('chat message',msg))
})
http.listen(3000)