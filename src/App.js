import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

function App() {

  var [val, setVal] = useState('');
  var [list, updateList] = useState([]);

  const inputChangeHandler = (e) => {
    setVal(e.target.value);
  }

  const btnClickHandler = () => {
    val === '' ?
      alert("Enter the name of todo") :
      updateList([...list, val]);
  }
  const deleteItem = (e) => {
    var parent = e.target.parentElement.parentElement;
    var txt = parent.textContent;
    var index = list.indexOf(txt);
    var newList = list.slice(0, index).concat(list.slice(index + 1));
    updateList(newList);
  }
  return (
    <div>
      <AddTodo
        addNewFunc={btnClickHandler}
        changedFunc={inputChangeHandler}>
      </AddTodo>
      {
        list.map(
          (title, index) => {
            return <TodoItem
              key={index}
              title={title}
              deleteBtnHandler={deleteItem}
            />
          }
        )
      }
    </div>
  );
}
export default App;