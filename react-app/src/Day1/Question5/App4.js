import TaskList from "./TaskList"

export default function App4(){
    const task = ["Task1", "Task2", "Task3", "Task4"];
    return(
        <TaskList tasks={task}/>
    )
}