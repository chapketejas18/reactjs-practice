import React, { useState } from 'react';

export default function ControlledToDoList() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}