import React , {Component} from 'react';
import './App.css';
import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput'

class App extends Component{
state={
    username :'Supermax'
}

usernameChangedHandler =(event)=>
{
    this.setState({username :event.target.value});
}


    render(){
        return(
<div className ='App'>
    <h1> Hello This Is rendering</h1>
<UserInput Changed ={this.usernameChangedHandler}
currentName ={this.state.username}/>
<UserOutput userName ={this.state.username} />
<UserOutput userName ='memu'/>
<UserOutput userName ='rahul'/>
</div>

        );
    }
}

export default App;