import React  from "react";
 
class Column2 extends React.Component{

    constructor(){
        super();
        this.state={
            Product:[]
        }
    }
    
    componentDidMount(){
        this.setState({Product:this.props.details});
    }

    renderHighlights=()=>{
       var list= this.state.Product.map((piont)=>{
            return <div key={piont.Battery}>
                <li >{piont.highlights[0].Battery} </li>
                <li >{piont.highlights[0].Camera}</li>
                <li >{piont.highlights[0].SSD}</li>
                </div>

        })
        return list;
    }

    renderAvailableOffers=()=>{
        var list= this.state.Product.map((offer)=>{
             return <div key={offer.Battery}>
                 <li><i className="fa fa-tag fa-lg" style={{color:"green"}}></i> {offer.AvailableOffers[0]} </li>
                 <li><i className="fa fa-tag fa-lg" style={{color:"green"}}></i> {offer.AvailableOffers[1]} </li>
                 </div>
 
         })
         return list;
     }

  

    render(){
        return(
        <div >
            {this.state.Product.map((product)=>{
                return <div key={product.productId} >
                <div key={product.productId} className="de_product_col_2">
                        <div className="product_brand_col_2">
                            <h5> {product.brand} </h5>
                        </div>
                        <div className="highlights">
                        <span className="leb_highlights"> highlights : &nbsp; </span><br></br> 
                            <ul>{this.renderHighlights()}</ul>
                        </div>
                        <div className="AvailableOffers">
                        <span className="leb_offers"> AvailableOffers : &nbsp; </span> 
                            <ul>
                                {this.renderAvailableOffers()}
                            </ul>
                            {/* <h5><i className="fa fa-tag fa-lg"></i> {product.AvailableOffers[0]} </h5> */}
                        </div>
                        <div className="description">
                            <span className="leb_des"> Description : &nbsp; </span>                            
                            <p className="product_price">{product.description[0]}</p>
                        </div> 
                </div>                 
            </div>
            })}
            
        </div>
        )
        }
}

export default Column2;
