import React from 'react'
export default class Thirdchild extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            name:'Initial state',
        };
    }
    componentDidMount() {
        setTimeout(() =>{
            this.setState({name: "Next State"})
        },1000)
    }
    componentDidUpdate(prevState){
        if(prevState.name !== this.state.name){
            document.getElementById('demo').innerHTML="Stage is changed"
        }
    }
    render() {
      
        return (
        <div className = "App">
           <h1>state : {this.state.name}</h1>
           <p id='demo'></p>
        </div>
    );
}
}