import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import axios from 'axios';

const App = () =>{
  const[data,setData] =React.useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/").then(
      res => res.json()
    ).then(json => console.log(json))
  },[])
  return(
    <div>
     {/* {data.map(yellaiah =><li>{yellaiah.title}</li>)} */}
    </div>
  )
}
export default App