const express = require('express');
const app = express();
const http = require('http').createServer(app);
const socket = require('socket.io')(http);

app.use(express.static(__dirname+'/public'));

socket.on('connection',(soc)=>{
    console.log('User Connected');
    soc.on('time',(time)=>{
        //console.log('Server Latency: '+ (Date.now()-time.time) +'ms');
        soc.broadcast.emit('t',time);
    })
})

http.listen(8080,()=>{
    console.log('Server runnning at 8080');
})