import axios from 'axios';
import React from 'react';
import Column1 from './DetailsCol1';
import Column2 from './DetailsCol2';

class ProductDetails extends React.Component{
    constructor(){
        super();
        this.state={
            Product:[]
        }
    }

    componentDidMount(){
       // var productId=req.params.productId;

       var productId=JSON.parse(localStorage.getItem('productId'))
        axios.get(`http://localhost:8888/${productId}`).then(
            responce =>{
                console.log( "responce",responce.data);
             //   var productId=req.params.productId;
                this.setState({Product:responce.data});
                console.log(this.state.Product);
            },
            err =>{
                console.log(err)
            }
        )
    }

    
    render(){
       
        return(
            <div >
                {this.state.Product.map((product)=>{
                    return  <div key={product.productId}>
                        <div className='column_1'>
                        <Column1  details={this.state.Product}/>
                        </div>
                        
                        <div  className='column_2'>
                        <Column2  details={this.state.Product}/>
                        </div> 
                    </div> 
                })}
               
            </div>
        )
    }
}

export default ProductDetails;