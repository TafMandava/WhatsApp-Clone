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
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
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
