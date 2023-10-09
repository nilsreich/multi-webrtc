import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "https://zq5sll-3000.csb.app",
  },
});

const clientsByRoom = {};
// Create an object to store connected client IDs by room

// Handle incoming connections
io.on("connection", (socket) => {
  // Log the connected clients
  console.log("Connected clients:", Object.keys(clientsByRoom));

  // Listen for join Event
  socket.on("join room", ({ roomName, offer }) => {
    // Join the specified room

    socket.join(roomName);

    // Store the socket ID in the clientsByRoom object
    if (!clientsByRoom[roomName]) {
      clientsByRoom[roomName] = new Set();
    }
    if (clientsByRoom[roomName].has(socket.id)) {
      // Socket already in room, ignore
      return;
    }
    clientsByRoom[roomName].add(socket.id);

    const clientsInRoom = [...clientsByRoom[roomName]];
    // Send the list of clients in the room to the newly joined user

    socket.emit("clients in room", clientsInRoom);

    // Broadcast a message to the room to inform others that a
    // new user has joined
    socket.to(roomName).emit("user joined", { offer: offer, id: socket.id });

    // Log the updated list of connected clients for the
    //specific room

    console.log(
      `Connected clients in ${roomName} room:`,
      clientsByRoom[roomName],
    );
  });

  // Listen for messages from the client
  socket.on("chat message", ({ message, room }) => {
    console.log(`Message received: ${message}`);
    // Broadcast the message to all connected clients in
    // the specific room
    io.to(room).emit("chat message", message);
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    for (const room in clientsByRoom) {
      clientsByRoom[room].delete(socket.id);
    }
  });
});

// Start Socket.IO server
io.listen(3001);
