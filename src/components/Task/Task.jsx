import { useState } from 'react';
import React from 'react'
import './Task.css';

const Task = ({index, text, tasks, setTasks}) => {

  const[isEditing,setIsEditing] =useState(false);
  const[editValue,setEditValue] =useState('');

  {/* creer fonction delete */}
let handleDelete = (text) =>{
  {/*alert('clicked on delete');*/}
let copyOfTasks=tasks;
copyOfTasks = copyOfTasks.filter((task) => task !== text);
setTasks(copyOfTasks);

};

let handleChange =(event) => {
  setEditValue(event.target.value);
};

let handleEdit = () => {
  let copyOfTasks = [...tasks];
  copyOfTasks[index] = editValue;
  setTasks(copyOfTasks);
  setIsEditing(false);
};

{/* appelle fonction delete onClick={()=> handleDelete() */}
  return (
    
    <li key={index}>
    {isEditing === true ? (
      <>
      <input 
         type='text' 
         value={editValue}
         onChange={handleChange}
         placeholder='modifier votre tache'
      />
      <button onClick={() => handleEdit()}>confirm</button>
      <button onClick={() => setIsEditing(false)}>annuler</button>
      </>
    ) : (
      <>
      <p>{text}</p>
      <div style={{display: 'flex', gap: '10px'}}>
      <button className="edit" onClick={() => setIsEditing(true)}>edit</button>
       <button className="delete" onClick={()=> handleDelete(text)}>delete</button>
       </div>
    </>
  )}
</li>)
}

export default Task