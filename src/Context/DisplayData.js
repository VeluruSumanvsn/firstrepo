import React,{useContext, useState} from 'react';
import { store } from '../App';

const DisplayData = () => {
    const[data,setData] = useContext(store);
    const[name,setName] = useState('');
    const submitHandler = (e) =>{
      e.preventDefault();
      // console.log("Submit is working");
      setData([...data,{name}]);
      console.log(name);
    }
    return (
    <div className='card'>
        {data.map((d,i)=><h1 key={i}>{d.name}</h1>)}
       
        <form onSubmit={submitHandler}>
        {/* <h1>{name}</h1> */}
          <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
          <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default DisplayData