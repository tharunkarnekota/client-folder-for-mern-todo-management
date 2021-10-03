//it is just for reference, main file is app.js

import React,{useEffect,useState} from 'react'
import axios from 'axios'

const App = () => {
  const [item,setItem] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/gettask').then(
      arr => setItem(arr.data)
    )
  })

  return (
    <div>
      {item.map (task => 
        <div>
          <h3>{task.todo}</h3>
        </div>
        )}
    </div>
  )
}

export default App
import React,{useEffect,useState} from 'react'
import axios from 'axios'

const App = () => {
  const [item,setItem] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/gettask').then(
      arr => setItem(arr.data)
    )
  })

  return (
    <div>
      {item.map (task => 
        <div key={task._id}>
          <h3>{task.todo}</h3>
        </div>
        )}
    </div>
  )
}

export default App
