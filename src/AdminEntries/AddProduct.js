import React from 'react';
import axios from 'axios';



class AddProduct extends React.Component{

    constructor(){
        super();
        this.state={
            products:[]
        }
      }

      componentDidMount(){
          this.getApi();
      }

    getApi=()=>{
        axios.get("http://localhost:8888/productList",this.state).then(
            res=>{
                console.log( 'responce',res.data);
                this.setState({products:res.data})
                localStorage.setItem('products',JSON.stringify(this.state.products));
            },
            err=>{
                console.log("error", err);
            }
      
        )
    }
    render(){
        return(
            
            <div class="dash_body">
               
                <h1>List of Products</h1>

            {this.state.products.map((product,index)=>{
            return <div key={product.productId} class="product_body">
                        <div class="item">
                            <div class="image">
                            <img  class="product_image" src={product.image}  alt='item1'></img>
                           {/* <a href={`/addProduct/${product.productId}`}> <img  class="product_image" src={product.image}  alt='item1'></img></a> */}
                            </div>
                            <div class="name">
                           <h5> {product.name} </h5>
                            </div>
                            <div class="price">
                            <h5 class="product_price">{product.price}</h5>
                            </div>
                        </div>                  
                    </div>
                   
                    })
                }
                    
            </div>
        )
    }
}

export default AddProduct;