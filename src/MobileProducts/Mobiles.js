import React from 'react';
import axios from 'axios';

class Mobiles extends React.Component{

    constructor(){
        super();
        this.state={
            mobiles:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8888/list",this.state).then(
            res=>{
                console.log( 'responce',res.data);
                this.setState({mobiles:res.data})
            //    localStorage.setItem('products',JSON.stringify(this.state.products));
            },
            err=>{
                console.log("error", err);
            }
      
        )
    }


    render(){
        return(
            <div>
                <h1>Mobiles</h1>
            </div>
        )
    }
}

export default Mobiles;