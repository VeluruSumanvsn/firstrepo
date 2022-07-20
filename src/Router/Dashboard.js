import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { store } from '../App'

const Dashboard = () => {
    const[data, setData] = useContext(store);
  return (
    <div>
        <h1>This is Dashboard</h1>
        <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default Dashboard