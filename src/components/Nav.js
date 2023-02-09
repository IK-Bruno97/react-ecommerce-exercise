import React, {useContext} from 'react';
import { Link } from "react-router-dom"; 
import { MyContext } from '../pages/context';

const Nav = () => {
  
  const {cart} = useContext(MyContext);
  
  return (
    <div className="app-header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h4><Link className="footer__logo" to="/">Your Logo</Link></h4>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Store <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
           
                <div className="form-inline my-2 my-lg-0">
                  <button className="btn btn-warning">Login</button>
                   
                  <Link to="/cart"> 
                    <img  className="cart-icon" alt='cart' src="cart.png"></img>
                  </Link>
                  
                  <p id="cart-total">{cart}</p>
  
                </div>
                
                </div>
            </nav>
    </div>
  )
}

export default Nav