import ListOfTask from "./ListOfTask";

export default function TaskArray(){
    const task = ["Task1", "Task2", "Task3", "Task4"];
    return(
        <ListOfTask tasks={task}/>
    )
}