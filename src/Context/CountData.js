import React,{useContext} from 'react'
import { store } from '../App';
const CountData = () => {
    const[data,setData] = useContext(store);
  return (
    <div className='card'>{data.length}</div>
  )
}

export default CountData