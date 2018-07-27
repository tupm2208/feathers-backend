const socket = io('localhost:3030');
const client = feathers();

client.configure(feathers.socketio(socket));
// Use localStorage to store our login token
client.configure(feathers.authentication({
  storage: window.localStorage
}));
// client.configure(socketio(socket));

const messageService = client.service('messages');

messageService.on('created', message => console.log('Created a message', message));

const messages = await client.service('messages').find({
    query: {
      $sort: { createdAt: -1 },
      $limit: 25
    }
  });

  console.log("message: ", messages);

// // Use the messages service from the server
// messageService.create({
//   text: 'Message from client'
// });