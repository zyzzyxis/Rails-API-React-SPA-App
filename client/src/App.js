
import './App.css';
import Tasks from './components/Tasks';
import {useState, useEffect} from 'react'
import axios from 'axios'
import TaskForm from './components/TaskForm';
import Task from './Tasks'


const App = (props) => {
  //  const [tasks, setTasks] = useState([])
  //  const [showForm, setShowForm] = useState(false)
   const [editTask, setEditTask] = useState(null)
   const {tasks, setShowForm, editTaskClickHandler} = props

   useEffect(() => {
    getTasks()
  }, [])

   
   const getTasks = async () => {
     try {
       let response = await axios.get('/api/tasks')
       setTasks(response.data)
     } catch(err) {
       console.log(err)

     }
   }

   const goHome = () => {
     setShowForm(false)
     setEditTask(null)
   }

   const getNavBar =() => {
    return (showForm ||editTask) ? <div onClick ={goHome}>Home</div> :
    <div onClick={()=> setShowForm(true)}>New</div>
   }
   const editTaskClickHandler =(id)=> {
     let task = task.find ( task => task.id === id)
     setEditTask(task)
   }

   const getPage = () => {
     return showForm ? <TaskForm />: 
      editTask ? <TaskForm {...editTask} setEditTask={setEditTask}/> :
      <Task task={task} editTaskClickHandler={editTaskClickHandler}/>
      
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
