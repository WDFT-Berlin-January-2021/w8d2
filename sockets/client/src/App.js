import './App.css';
import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:5555')

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // listen to the server for new messages and update the state
    socket.on('message', (data) => {
      console.log('data', data)
      setMessage(data.message)
    })
  }, [])

  const handleChange = e => {
    // we want to update the state
    setMessage(e.target.value);
    // emit an event to the server that there is a new message
    // emit gets 2 parameters: name of the event, data
    socket.emit('new-message', {
      message: e.target.value
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={message} onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
