import React from 'react';
import axios from 'axios';


  
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }

    
    handlerChange=(event)=>{
        var value= event.target.value;
        var name= event.target.name;
        this.setState({[name]:value})
     }

     handlerSubmit=(event)=>{
         event.preventDefault();
         console.log(this.state);

        axios.post("http://localhost:8888/login",this.state).then(
            res=>{
                console.log( 'responce',res.data);

                if(res.data.token){
                    localStorage.setItem('token',res.data.token);
                    this.props.history.push("/addProduct");
                }
            },
            err=>{
                console.log("error", err);
            }

        )
     }


    render(){
        return(
            <div>
                <h1>Login page</h1>

                <form onSubmit={this.handlerSubmit} method="POST" >
                    Email Id : <input type="email" onChange={this.handlerChange} id='emailId' name='emailId' placeholder='emailId'></input><br></br><br></br>
                    Password : <input type="password" onChange={this.handlerChange} id='password' name='password' placeholder='password'></input><br></br><br></br>
                    <button>Login</button>
                </form>
            </div>
           
        )
    }
}

export default Login;