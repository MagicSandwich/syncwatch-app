const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const {Server} = require('socket.io')

app.use(cors({ origin: "*" }));

const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        //origin: "http://localhost:3000",
        origin: "*",
        methods:["GET","POST"],
    },
})

server.listen(3001, ()=>{
    console.log("SERVER GOOD")
});

io.on('connection',socket =>{
    console.log(socket.id)
    socket.join("tba")
    socket.on('chat-msg',data =>{
        socket.to(data.room).emit("receive-msg",data)
        console.log(socket.id,data.msg,data.user,data.room)
    })

    socket.on("disconnect", ()=>{
        console.log("Disconnect",socket.id)
    })
})

