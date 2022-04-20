import React from 'react';
import axios from 'axios';


class Register extends React.Component{
     constructor(){
         super();
         this.state={
             username:'',
             password:'',
             emailId:''
         }
     }

     handlerChange=(event)=>{
        var value= event.target.value;
        var name= event.target.name;
        this.setState({[name]:value})
     }

     userSubmit=(event)=>{
         event.preventDefault();
         console.log(this.state);

        axios.post("http://localhost:8888/register",this.state).then(
            res=>{
                console.log( 'responce',res.data);
                if(res.data.token){
                    localStorage.setItem('token',res.data.token);
                    this.props.history.push("/dashboard");
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
                 <h1>Register Page</h1>
                 <form onSubmit={this.userSubmit} method="POST" >
                     Username : <input type="text" name='username' onChange={this.handlerChange}></input><br></br><br></br>
                     Password : <input type="password" name='password' onChange={this.handlerChange}></input><br></br><br></br>
                     Email Id : <input type="email" name='emailId' onChange={this.handlerChange}></input><br></br><br></br>
                     <button>Register</button>
                 </form>
                     
             </div>
         )
     }
}
export default Register;