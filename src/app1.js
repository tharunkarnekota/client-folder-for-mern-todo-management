//it is just for reference, main file is app.js

import React,{useEffect} from 'react'
import axios from 'axios'

const App = () => {

  useEffect(()=>{
    axios.get('http://localhost:5000/gettask').then(
      arr => console.log(arr.data)
    )
  })

  return (
    <div>
      <h2>hello</h2>
    </div>
  )
}

export default App
