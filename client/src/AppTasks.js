
import './App.css';
import Tasks from './components/Tasks';
import {useState, useEffect} from 'react'
import axios from 'axios'
import TaskForm from './components/TaskForm';
// import Task from './components/Task'


const App = () => {
   const [tasks, setTasks] = useState([])
   const [showForm, setShowForm] = useState(false)
   const [editTask, setEditTask] = useState(null)
  //  const {tasks, setShowForm, editTaskClickHandler} = props

   useEffect(() => {
    getTasks()
  }, [])

   
   const getTasks = async () => {
     try {
       let response = await axios.get('/api/tasks')
       setTasks(response.data)
     } catch(err) {
       alert('error occurred debug')
     }
   }

   const goHome = () => {
     setShowForm(false)
     setEditTask(null)
   }

   const getNavBar =() => {
    return (showForm || editTask) ? <div onClick ={goHome}>Home</div> :
    <div onClick={()=> setShowForm(true)}>New</div>
   }

   const editTaskClickHandler =(id)=> {
     let task = tasks.find ( task => task.id === id)
     setEditTask(task)
   }

   const addTask = (task) => {
     setShowForm(false)
     setTasks([task, ...tasks])
   }

   const updateTask = (editedTask) => {
     const updateTasks = tasks.map (task =>{
       return task.id !== editedTask.id ? task : editedTask
     })
     setEditTask(null)
     setTasks(updateTasks)
   }

   const deleteTask = (taskID) => {
     const filterTasks = tasks.filter (task => task.id !== taskID)
     setTasks(filterTasks)
   }


   const getPage = () => {
    return showForm ? <TaskForm addTask={addTask} /> : 
     editTask ? <TaskForm {...editTask} updateTask={updateTask} setEditTask={setEditTask}/> :
     <Tasks tasks={tasks} deleteTask={deleteTask} editTaskClickHandler={editTaskClickHandler}/>
   }


  return (
    <div className="App">
      {/* <TaskForm />
      <Tasks tasks={tasks}/> */}
      {getNavBar()}
      {getPage()}
    </div>
  );
}

export default App;
