import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import './App.css';

const App = () => {
  let [fixedToDos, setFixedToDos] = useState([
    <ToDo key={"Sleep at 8"} todo={"Sleep at 8"}/>,
    <ToDo key={"Cook dinner"} todo={"Cook dinner"}/>,
    <ToDo key={"Finish this todo list"} todo={"Finish this todo list"}/>
  ]);

  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(input)
  }, [input]);

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const formConfirm = e => {
    e.preventDefault();
    if (input === "") {
      alert("Please Enter a value.")
    } else {
      setFixedToDos(fixedToDos => fixedToDos.concat(<ToDo key={input} todo={input}/>));
    }

    setInput('');
  };

  return(
    <div className="App">
      <form onSubmit={formConfirm}>
        <input type="text" onChange={updateInput} className="input-bar" value={input} autoFocus/>
        <button className="input-btn">Add</button>
      </form>
      <div className="full-list">
        {fixedToDos}
      </div>
    </div>
  );
};

export default App;
