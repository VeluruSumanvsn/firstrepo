import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

function Fourthchild() {

const [students,setStudents] = useState('Data is Loading !!')
const [name,setName] = useState('')

const handleClick = async() => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    setStudents(data)
    console.log(data)
}

return (
    <div className="container">
        <h2>Example component</h2>
        <button onClick = {handleClick}>Get students</button>
        <div>
            {JSON.stringify(students.data)}

        </div>
    </div>
);
 }

export default Fourthchild;