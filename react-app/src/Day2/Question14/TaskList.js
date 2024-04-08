import React, { useState, useCallback } from 'react';

const TaskList = ({ tasks }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCompleteTask = useCallback(
    (taskId) => {
      setCompletedTasks((prevCompletedTasks) => {
        if (prevCompletedTasks.includes(taskId)) {
          return prevCompletedTasks.filter((id) => id !== taskId);
        } else {
          return [...prevCompletedTasks, taskId];
        }
      });
    },
    []
  );

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: completedTasks.includes(task.id) ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => handleCompleteTask(task.id)}>
              {completedTasks.includes(task.id) ? 'Uncomplete' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
