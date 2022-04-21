const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const {Server} = require('socket.io')
const helmet = require("helmet");
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "*" }));
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);
app.use(express.static(path.join(__dirname, "./build")));

const server = http.createServer(app)
server.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
});

const io = new Server(server, { cors: { origin: "*" } });


io.on('connection',socket =>{
    console.log(socket.id)
    socket.join("tba")
    socket.on('chat-msg',data =>{
        socket.broadcast.to(data.room).emit("receive-msg",data)
        console.log(socket.id,data.msg,data.user,data.room)
    })

    socket.on("disconnect", ()=>{
        console.log("Disconnect",socket.id)
    })
})

