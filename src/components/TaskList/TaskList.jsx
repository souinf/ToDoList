import React from 'react'
import './TaskList.css';
import Task from '../Task/Task';

const TaskList = ({tasks,setTasks}) => {
  return (
    <ul className='myItems'>
     {/* {list.map((text,index) =>(<li key={index}>{text}</li>))} */}

     {tasks.map((text,index) =>(
      <Task index={index} text={text} tasks={tasks} setTasks={setTasks}/>))}
    </ul>
  );
};

export default TaskList;