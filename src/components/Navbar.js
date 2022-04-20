import React from 'react';
import {HashRouter,NavLink,Route} from 'react-router-dom';
import AddProduct from '../AdminEntries/AddProduct';
import ProductDetails from '../AdminEntries/ProductDetails';
import ChangePassword from './ChangePassword';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
  
class Navbar extends React.Component{

  
    render(){

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
                <NavLink className="nav-link"  to="/addProduct">AddProduct</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            </li>            
        </ul>
      </div>
    </div>
</nav>
          
            <Route exact path="/"  component={Login}></Route>
            <Route exact path="/login"  component={Login} ></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/contact" component={Contact} ></Route>
            <Route exact path="/changePassword" component={ChangePassword}></Route>
            <Route exact path="/addProduct" component={AddProduct} ></Route>
            <Route exact path="/addProduct/:productId" component={ProductDetails} ></Route>
            </HashRouter>
        )        
    }
}

export default Navbar;









