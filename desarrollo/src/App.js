import logo from './logo.svg';
import './App.css';
import TaskList from './components/TodoList';

function App() {
  function handleFocus(){
    alert("Focus");
  }
  function handleOutFocus(){
    alert("Out Focus");
  }
  return (
    <div className="App">
      <TaskList/>
    </div>
  );
}

export default App;
