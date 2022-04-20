
import axios from 'axios';
import React,{Component} from 'react';

  
class ChangePassword extends Component{
    constructor(){
        super();
        this.state={
            emailId:"ashwith123@gmail.com",
            currentPassword:"",
            newPassword:""
        }
    }

    handleOnChange=(event)=>{
      var value=event.target.value;
      var name=event.target.name;
      this.setState({[name]:value});
    }

    changePassword=(event)=>{
        event.preventDefault();
        console.log(this.state);

        axios.post("http://localhost:8888/changePassword",this.state,{headers:{"authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiNjI1YTM3YjcyOTY0YTQ4YmNjOTg5Y2U2IiwiaWF0IjoxNjUwMDgyODEzfQ.lYhXUz68Q0emIf__MgiUbgMakUgkEaAtKeVcYjUZzKo`}}).then(
            res =>{
                console.log(res)
            },
            err=>{
                console.log(err.message)
            }
        )
    }

    render(){
        return(
            <div>
                <h1>ChangePassword here</h1>
                <form onSubmit={this.changePassword}>
                    Current password : <input type="password" onChange={this.handleOnChange} name="currentPassword"></input><br></br><br></br>
                    Current password : <input type="password" onChange={this.handleOnChange} name="newPassword"></input><br></br><br></br>
                    <button>Submit</button>
                </form>
            </div>
           
        )
    }
}

export default ChangePassword;