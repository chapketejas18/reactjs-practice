import TaskList from "./TaskList";

export const Tasks = () => {
  const tasks = [
    { id: 1, name: "Day 1 - Javascript" },
    { id: 2, name: "Day 2 - React" },
    { id: 3, name: "Day 3 - Node" },
  ];

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};
