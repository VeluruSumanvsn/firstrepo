import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../App';

const Home = () => {
//    const[data,setData] = useContext(store);
    return (
        <div>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Home