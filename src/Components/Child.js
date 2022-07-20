import React from "react";

class Child extends React.Component {
    constructor(props){
        super();
        this.state={
            email:" ",
            password:" "
        }
    }
    onChangeFunction =(event) =>{
        event.preventDefault();
        const{name,value} = event.target;
        let errors = this.state.errors;
        switch(name){
            case 'email':
            errors.email < 5 ? "username must be 5 characters": "" ;
            break;

            case 'password':
            errors.password < 8 ? "password must be 8 charss": "" ;
            break;
            default:
            break;

        }
        this.setState({errors,[name]:value})
    }   
onSubmit = (e) =>{
e.preventDefault();


}
    render() {
        const {errors} =this.state;
        return (
            <div className="App">
                <form onSubmit={this.onsubmit}>
                    <label>Login</label>
                    <input type="email" email="email" onChange={this.onChangeFunction}/>
                    <label>Password </label>
                    <input type="password" email="password" onChange={this.onChangeFunction} />
                    <input type="submit" />
                </form>
            </div>
        )

    }
}

export default Child