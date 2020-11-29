import React, { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('');

  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <form>
        <input type='text' />
        <button type='submit'></button>
      </form>
    </React.Fragment>
  )
}

export default App;
