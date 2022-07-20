import React from 'react'

class Secondchild extends React.Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    };
    increment(){
        console.log("Clicked");
        this.setState({
            count:this.state.count+1
        })
    }
    decrement(){
        if(this.state.count < 0){
            this.setState({
                count:0
            })
        }
        else{
            this.setState({
                count:this.state.count -1
            })
        }
      
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.increment.bind(this)}>+</button>
                <button onClick={this.decrement.bind(this)}>-</button>
            </div>
        )
    }
}
export default Secondchild
//In 16.8 version React hooks are introduced