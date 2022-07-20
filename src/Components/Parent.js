import React,{useState, useEffect} from 'react'
import Secondchild from './Secondchild'
const Parent = (props) => {
    const[name, setName] = useState({
        person:"Rohitha",
        id:123456
    });
    const{person, id} = name;
  return (
    <div>
        <Secondchild person={person} id={id}/>
    </div>
  )
}

export default Parent

