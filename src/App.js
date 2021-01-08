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
import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';

function App() {
  
  /*
      Run this piece of code when the App or component loads
      Listening to Pusher
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
