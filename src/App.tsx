import React, { useState } from 'react';
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement> // type for form 

interface ITodo {
  text: string;
  completed: boolean;
};

const App:React.FC = () => {

  const [value, setValue] = useState<string>(''); // always add generic in useState
  const [todo, setTodo] = useState<ITodo[]>([]); 
  // an interface contain types and at the end of the generic <ITodo> we add '[]' because it is an empty array

  const handleSubmit = (e: FormElem):void => {
    e.preventDefault();
    setValue('')
  }

  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit} >
        <input value={value} type='text' onChange={e => setValue(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
    </React.Fragment>
  )
}

export default App;
