import React, { useContext } from 'react'
import { store } from '../App';
const SecondChild = () => {
    const[data, setData] = useContext(store);
    return (
      <div>Second Child{data}</div>
    )
  }
export default SecondChild