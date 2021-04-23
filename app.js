const app = require("express")();
const mongoose = require('mongoose');
const RouterInterface = require('./routers/interface');
const bodyParser = require('body-parser');
const interface = require('./models/Interface')
mongoose.connect('mongodb://localhost:27017/testMirror', {useNewUrlParser: true})
.then(() => {
    console.log("mongoose connected")
})

app.use(bodyParser.json());
app.use(RouterInterface);

const httpServer = require("http").createServer(app);

const io = require("./socket").init(httpServer);

io.on("connection", async (socket) => { 
    console.log("A mirror is connected")
    const data = await interface.findOne({ id:"14767621" });
    socket.on("message",(data) => {
        console.log(data);
    })
    socket.emit("14767621",data);
    
});

httpServer.listen(3000,() => {
    console.log("Serveur is listening on Port 3000")
});


