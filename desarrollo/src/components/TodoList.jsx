import { useState } from "react";
import useList from "../hooks/useList";

export default function TaskList() {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.push(newTask);
    setNewTask("");
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTask}
          onChange={handleInputChange}
          placeholder="New Task"
          type="text"
        />
        <button type="submit">Create Task</button>
      </form>
      {tasks.isEmpty() ? (
        <p>Tasks is empty</p>
      ) : (
        <ul>
          {tasks.value.map((task, index) => (
            <li key={index}>
              <input 
                type="checkbox"
                onClick={() => tasks.remove(index)}
                checked={false}
              />{task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
