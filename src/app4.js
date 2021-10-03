//it is just for reference, main file is app.js

import React,{useEffect,useState} from 'react'
import axios from 'axios'

const App = () => {
  const [item,setItem] = useState([]);
  const [newtask,setNewtask] = useState("");

  useEffect(()=>{
    axios.get('http://localhost:5000/gettask').then(
      arr => setItem(arr.data)
    )
  })

  const submitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/addtask',{todo:newtask}).then(
      arr => setItem(arr.data)
      
    )
  }

  const deleteHandler = id =>{
    axios.delete(`http://localhost:5000/delete/${id}`).then(
      arr => setItem(arr.data)
    )
  }
  return (
    <div>
      <center>
        <br />
        <div className="card">
            <div className="card-body">
              <h2 className="card-title" style={{"color":"brown"}}>Todo Management Appilication</h2>
                    <form onSubmit={submitHandler}>
                      <input type="text" value={newtask} onChange={(e)=>{ setNewtask(e.target.value) }}/>
                      <input type="submit" />
                    </form><br /><br />
                    {item.map (task => 
                      <div key={task._id}>
                        <h3>{task.todo}</h3>&nbsp;&nbsp;<button onClick={()=>deleteHandler(task._id)}>Delete</button>
                      </div>
                      )}
            </div>
          </div>
      </center>
    </div>
  )
}

export default App
