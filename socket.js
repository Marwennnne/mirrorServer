let io;
const options = { 
    cors: {
        origin: '*',
      }
 };
module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer,options);
        return io;
    },
    getIO: () => {
        if (!io){
            throw new Error('Socket.io not initialized');
        }
        return io;
    }
}