/*
Frontend on Firebase
    -- Setup Config </>
    -- Register app
    -- Next sudo npm install -g firebase-tools
    -- Next
    -- Continue to console

-- Authentication
-- Hosting

Backend on Heroku
    -- Express.js
    -- Node.js
    -- mongoDb
       -- For realtime functionality use mongoDB's change stream and pusher
       -- Once there is a change in mongodb's selected collection that will fire off chat stream and pusher in turn this will fire off the axios or fetch function on the front end which will refresh the whole composition and you will see everything in realtime.
*/
import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
/*
    NB: This is the local axios not the axios library
*/
import axios from './axios';

function App() {

   const [messages, setMessages] = useState([]);

  /*
     Fetching all the initial information using axios

  */
  useEffect(() => {
    /* 
        Making the actual api call
        Go ahead and get all the messages
    */
    axios.get('api/v1/messages/sync')
        .then((response) => {
          setMessages(response.data);
        });
  }, []);
  
  /*
      Subscribing to the message channel
      Therefore, when we push into our DB which is linked to the Pusher, the Pusher should then send a message and push it to the messages channel inside an event which we are listening to on the frontend and it should alert
      Run this piece of code when the App or component loads
      Listening to Pusher
      When we connect to our DB which is linked to our pusher 
  */
  useEffect(() => {

    const pusher = new Pusher('711eaf04cbfc3efa3e97', {
      cluster: 'eu'
    });
    
    /*
        The channel is linked to what we push in the trigger pusher.trigger('messages', 'inserted', ... where the channel is equivalent to messages and the event is inserted
    */
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });

  }, []);

  console.log("Messages >>> ", messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
