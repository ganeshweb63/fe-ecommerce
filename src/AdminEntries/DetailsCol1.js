import React  from "react";
import {Link} from 'react-router-dom';

class Column1 extends React.Component{

    constructor(){
        super();
        this.state={
            Product:[]
        }
    }
    
    componentDidMount(){
        this.setState({Product:this.props.details});
    }

    
    


    render(){

        return(
        <div>
            {this.state.Product.map((product)=>{
                return <div key={product.productId}>
                <div  className="de_product_col_1">
                       <div className="image_col_1">
                        <img  className="product_image_col_1" src={product.image}  alt='productImage'></img>
                           {/* <a href={`/addProduct/${product.productId}`}> <img  className="product_image" src={product.image}  alt='item1'></img></a> */}
                        </div>
                        <div className="product_name_col_1">
                            <h4><b> {product.name} </b> </h4>
                        </div>
                        <div className="product_price_col_1">
                            <h5 className="product_price">{product.price}</h5>
                        </div>
                    <div className="buttons">
                   <Link to={`/mycart`}> <button  type="button" style={{marginRight:"100px"}} className="btn btn-danger"><i className="fa fa-shopping-cart"></i> Add to Cart</button></Link>
                    <button type="button" className="btn btn-success">Buy</button>
                   </div>
                </div> 
                                
            </div>
            })}
            
        </div>
        )
        }
}

export default Column1;