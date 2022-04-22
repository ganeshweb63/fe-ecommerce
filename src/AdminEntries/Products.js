import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'



class Products extends React.Component{

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

        // storeId=()=>{
        //     localStorage.setItem('productId',product.productId);
        // }

    render(){
        return(
            
            <div className="dash_body">
               
                <h1>List of Products</h1>

            {this.state.products.map((product)=>{
            return  <Link onClick={()=>{ localStorage.setItem('productId',product.productId);}}  key={product.productId} to={`/products/${product.productId}`}>
                 <div key={product.productId} className="product_body">
                       <div className="item">
                            <div className="image">
                            <img  className="product_image"  src={product.image}  alt='item1'></img>
                           {/* <a href={`/addProduct/${product.productId}`}> <img  className="product_image" src={product.image}  alt='item1'></img></a> */}
                            </div>
                            <div className="name">
                           <h5> {product.name} </h5>
                            </div>
                            <div className="price">
                            <h5 className="product_price">{product.price}</h5>
                            </div>
                        </div>                 
                    </div>
                   </Link> 
                    })
                }
                    
            </div>
        )
    }
}

export default Products;