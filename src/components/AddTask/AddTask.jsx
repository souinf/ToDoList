import React,{useState} from 'react'
import './AddTask.css'

const AddTask = ({tasks, setTasks}) => {
const [newTask,setNewTask] = useState('');

let handleSubmit =() => {
    setTasks([...tasks,newTask]); {/* ajouter newTask aprés les anciens tasks */}
    setNewTask('');   {/* vider l'espace  de l'ecriture  */}
};
let handleChange =(event) => {
setNewTask(event.target.value);
console.log(event.target.value);
};
 {/*<div class="inputDiv">
    <input type="text" id="taskInput" placeholder="Add a new task"/>
    <button onclick= {handleSubmit}>Add task</button>
  </div> */}
  return (
<div class="inputDiv">
    <input type="text"  
    value={newTask} 
    onChange={handleChange} 
    handleChange={handleChange} 
    placeholder="Add a new task"/>
    <button onClick={() => handleSubmit()}>Add Task</button>
  </div>

  );
};

export default AddTask;