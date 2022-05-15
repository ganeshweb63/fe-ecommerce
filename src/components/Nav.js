import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Products from '../AdminEntries/Products';

import Contact from './Contact';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import useAuth from './useAuth';


function Nav(){
    const [isAuth,login,logout]=useAuth(false);


    return(
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>

                {isAuth ? (<div><div>you are logged in</div><button onClick={logout}>Logout</button></div> ):(<div><div>you are logged out</div><button onClick={login}>Login</button></div> )}

                <Switch>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="login" exact component={Login} />
                    <ProtectedRoute path="/products" exact component={Products} />
                </Switch>
            </Router>
        </div>
    )
}

export default Nav;