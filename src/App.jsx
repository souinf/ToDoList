import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './components/MyTitle/MyTitle'
import TaskList from './components/TaskList/TaskList'
import AddTask from './components/AddTask/AddTask'


function App() {
  
const[tasks, setTasks] = useState([

    'task1',
    'task2',
    'task3',
    'task4',
    'task5',
  ]);


  return (
    <div className='content'>
    <MyTitle  title ='To Do List'/>
    <TaskList tasks={tasks} setTasks={setTasks}/>
    <AddTask tasks={tasks} setTasks={setTasks}/>
    
    </div>
  )
}

export default App
