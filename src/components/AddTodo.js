import './AddTodo.css';
function AddTodo(props) {
  return (
    <div>
      <header>
        <h2>Todo App Using React</h2>
        <input onChange={props.changedFunc} type="text" placeholder='Todo Title' />
        <button onClick={props.addNewFunc}>Add</button>
      </header>
    </div>
  );
}
export default AddTodo;