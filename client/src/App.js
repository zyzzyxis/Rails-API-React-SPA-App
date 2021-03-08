
import './App.css';
import Tasks from './components/Tasks';
import {useState, useEffect} from 'react'
import axios from 'axios'


const App = (props) => {
   const [tasks, setTasks] = useState([])
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
  return (
    <div className="App">
      <Tasks tasks={tasks}/>

      
    </div>
  );
}

export default App;
