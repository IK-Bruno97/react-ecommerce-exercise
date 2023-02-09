import product from '../assets/briefcase.jpg'
import { Link } from "react-router-dom"; 
import { MyContext } from './context';
import { useContext } from 'react';


const Cart = () => {
   const {setCart} = useContext(MyContext);

   const handleClick = event => {
      var action = event.target.getAttribute('data-action');
      console.log(action)
      if (action==='add'){setCart((cart) => cart += 1)}
      else if(action === 'remove'){setCart((cart) => cart -= 1)}
    };
/* states */

    return (
      <>
       	<div className="w3-margin row">
            <div className="col-lg-12">
               <div className="box-element">

                  <Link  className="btn btn-outline-dark" to="/">&#x2190; Continue Shopping</Link>

                  <br></br>
                  <br></br>
                  <table className="table">
                     <tr>
                        <th><h5>Items: <strong>Product</strong></h5></th>
                        <th><h5>Total:<strong> $Total</strong></h5></th>
                        <th>
                           <Link  style={{float:'right', margin:'5px'}} className="btn btn-success" to="/checkout/">Checkout</Link>
                        </th>
                     </tr>
                  </table>

               </div>

               <br></br>
               <div className="box-element">
                  <div className="cart-row">
                     <div style={{flex:2}}></div>
                     <div style={{flex:2}}><strong>Item</strong></div>
                     <div style={{flex:1}}><strong>Price</strong></div>
                     <div style={{flex:1}}><strong>Quantity</strong></div>
                     <div style={{flex:1}}><strong>Total</strong></div>
                  </div>
                  
                  <div className="cart-row">
                     <div style={{flex:2}}><img className="row-image" alt="product images" src={product}/></div>
                     <div style={{flex:2}}><p>Product</p></div>
                     <div style={{flex:1}}><p>$Price</p></div>
                     <div style={{flex:1}}>	
                        <div className="quantity">
                           <img onClick={handleClick} src="" alt="-" data-product="" data-action="remove" className="chg-quantity mp update-cart"/>
                           <p className="quantity">Qtity</p>
                           <img onClick={handleClick} src="" alt="+" data-product="" data-action="add" className="chg-quantity update-cart mp"/>
                     
                     
                        </div>
                     </div>
                     <div style={{flex:1}}><p>$Total</p></div>
                  </div>
                  
               </div>
            </div>
         </div>
      </>
    )
};
  
export default Cart;
  