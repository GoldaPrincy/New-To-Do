import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import Stats from './components/Stats';

{/*import logo from './logo.svg';
import './App.css';*/}

function App() {

  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList,newTask])
  }

  function deleteTask(deleteTaskName){
    setToDoList(toDoList.filter(task=>task.taskName !== deleteTaskName))
  }

  function toggleCheck(taskName){
    setToDoList ((prevToDoList) => prevToDoList.map((task) => task.taskName ===taskName? {...task,checked :!task.checked}: task
  ),
);
    
  }

  function editTask(oldName, newName) {
  setToDoList(toDoList.map(task =>
    task.taskName === oldName ? { ...task, taskName: newName } : task
  ));
}


  console.log(toDoList);
  return (
  <> 
  <div className="container">
    <h1>TO-DO LIST</h1>
    <TaskInput addTask ={addTask} />

    <div className="toDoList">
      <span> TO DO</span>
      <ul className="list-items">
       {toDoList.map((task, key) => (
          <TaskItem task={task} key={key} 
          deleteTask={deleteTask} toggleCheck={toggleCheck} editTask={editTask}/>
          
       ))}
       </ul>

       {toDoList.length ===0? (
        <p className='notify'>You Are done!</p>) : null}
       </div>
       </div>
       <Stats toDoList ={toDoList} />
       </>
    );
}

export default App;
