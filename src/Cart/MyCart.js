import React from 'react';



class MyCart extends React.Component{
        constructor(){
            super();
            this.state={
                Product:[],
                
            }
        }
     
         
         render(){
             return(
                 <div >
                    <h1>MyCart</h1>                   
                 </div>
             )
         }
}

export default MyCart;