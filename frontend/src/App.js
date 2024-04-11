import logo from './logo.svg';
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';
import './App.css';

const arrayTodos = [
  { name: "Limpar a casa", status: true},
  { name: "Banho no cachorro", status: false}

];

const Todos = ({ todos }) => {
  return (
    <div className="todos">
      {todos.map(todo => {
        return (
          <div className="todo">
            <button className='checkbox' style={{backgroundColor: todo.status ? "#A879E6" : "#FFFFFF"}}></button>
            <p>{ todo.name }</p>
            <button>
              <AiOutlineEdit size={20} color={"#64697b"}></AiOutlineEdit>
            </button>
            <button>
              <AiOutlineDelete size={20} color={"#64697b"}></AiOutlineDelete>
            </button>
          </div>
        );
      })};
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className='header'>
          <h1>Dont be lazzy</h1>
        </div>
        <Todos todos={arrayTodos}></Todos>
        <input className='imputName'></input>
        <button className='newTaskButton'>+ Newtask</button>
      </header>      
    </div>
  );
}

export default App;
