import React, { useState } from 'react';

import './App.css';
import './form.css';
import { sendMessage } from './api';
import Message from './Message';


function App() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(message);

      alert(`Message Published Successfully...`);

      window.location.reload();

    } catch (error) {
      alert(`Message Published Failed...`);
    }
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <textarea
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Publish</button>
          </form>
          <Message />
        </header>
      </div>
      <div className="form-container">

      </div>
    </div >
  );
}

export default App;