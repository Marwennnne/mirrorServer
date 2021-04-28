require('dotenv').config();
const app = require("express")();
const mongoose = require('mongoose');
const RouterInterface = require('./routers/interface');
const bodyParser = require('body-parser');
const interface = require('./models/Interface')

try{
    mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@cluster0.yf7o0.mongodb.net/testMirror?retryWrites=true&w=majority`, {useNewUrlParser: true})
    .then(() => {
        console.log("mongoose connected")
    });
} catch(err){
    console.log(err.message);
}


app.get('/',(req,res) => {
    res.status(200).json({ message: "hello world"});
});


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

httpServer.listen(process.env.PORT || 3000,() => {
    console.log("Serveur is listening on Port 3000")
});


