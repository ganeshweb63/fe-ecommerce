import React from 'react';
import {HashRouter,NavLink,Route} from 'react-router-dom';
import ProductDetails from '../AdminEntries/ProductDetails';
import ChangePassword from './ChangePassword';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Products from '../AdminEntries/Products';
import MyCart from '../Cart/MyCart';
import Mobiles from '../MobileProducts/Mobiles';


  
function Navbar(){

        return(
            <HashRouter>
                
                  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                       <div className="container-fluid">
                           {/* <a className="navbar-brand" href="#">Ecommere</a> */}
                                <NavLink className="nav-link"  to="#"><b>Ecommere</b></NavLink>

                          <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                      <li className="nav-item">
                                <NavLink className="nav-link"  to="/login">Login</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                       </li>
                                       <li className="nav-item">
                                <NavLink className="nav-link"  to="/register">Register</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                       </li>
                                       <li className="nav-item">
                                <NavLink className="nav-link"  to="/contact">Contact</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                        </li>
                                        <li className="nav-item">
                                <NavLink className="nav-link"  to="/changePassword">ChangePassword</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                        </li>

                                        <li className="nav-item">
                                <NavLink className="nav-link"  to="/products">Products</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                         </li>   

           
                            </ul>
                           </div>
                        </div>
                   </nav>

{/* {isAuth ? (<div><button onClick={logout}>Logout</button></div> ):(<div><button onClick={login}>Login</button></div> )} */}
          


            <Route exact path="/"  component={Login}></Route>
            <Route exact path="/login" component={Login}  ></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/contact" component={Contact} ></Route>
            <Route exact path="/changePassword" component={ChangePassword}></Route>
            <Route exact path="/products" component={Products} ></Route>
            <Route exact path="/products/:productId" component={ProductDetails} ></Route>
            <Route exact path="/mycart" component={MyCart}></Route>
            <Route exact path="/mobiles" component={Mobiles}></Route>
            </HashRouter>
        )      
    
}

export default Navbar;









