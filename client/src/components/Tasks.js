
import Task from './Task'
import axios from 'axios'
import {useState, useEffect} from 'react'


const Tasks = (props) => {
  const {tasks, setShowForm, editTaskClickHandler} = props
  const [tasksx, setTasks] = useState([])
 
  useEffect(() => {
    getTasks()
    }, [])
  
  const getTasks = async () => {
    try {
      let res = await axios.get("/api/tasks")
      setTasks(res.data)
   } catch (err) {
    alert("error occured, need to debug")
    }
  }
  
  const renderTasks = () => {
    if(tasks.length == 0){
      return <h1>No Tasks</h1>
    }
    return tasks.map( task => {
      return <Task key={task.id} editTaskClickHandler={editTaskClickHandler} setTaskForm={setShowForm} {...task} />
    })
  }

  return (
    <>
    {renderTasks()}
    </>
  )
  // const {tasks} = props
  // const renderTasks = () => {
  //   return tasks.map( task => { return <Task key={task.id}{...task}/>})
    
  // }
  // return (
  //   <>
  //     <h1>Tasks Here</h1>
  //     {renderTasks()}
  //   </>
  // )
}


export default Tasks