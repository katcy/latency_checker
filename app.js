const express = require('express');
const app = express();
const http = require('http').createServer(app);
const socket = require('socket.io')(http);

socket.on('connection',(soc)=>{
    console.log('User Connected');
    soc.on('t',(time)=>{
        console.log('Batmobile Latency: '+ (Date.now()-time.time) +'ms')
    })
})

http.listen(8000,()=>{
    console.log('Server runnning at 8000');
})