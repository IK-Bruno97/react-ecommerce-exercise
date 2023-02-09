import { Link } from 'react-router-dom';
import product from '../assets/briefcase.jpg'
const Checkout = () => {
    return(
      <>
        <div className="w3-margin row">
          <div className="col-lg-6">
            <div className="box-element" id="form-wrapper">
              <form id="form">
              {/* csrf_token */}
                  <div id="user-info">
                      <div className="form-field">
                        <input required className="form-control" type="text" name="name" placeholder="Name.."/>
                      </div>
                      <div className="form-field">
                        <input required className="form-control" type="email" name="email" placeholder="Email.."/>
                      </div>
                  </div>
                  
                  <div id="shipping-info">
                      <hr></hr>
                      <p>Shipping Information:</p>
                      <hr></hr>
                      <div className="form-field">
                        <input className="form-control" type="text" name="address" placeholder="Address.."/>
                      </div>
                      <div className="form-field">
                        <input className="form-control" type="text" name="city" placeholder="City.."/>
                      </div>
                      <div className="form-field">
                        <input className="form-control" type="text" name="state" placeholder="State.."/>
                      </div>
                      <div className="form-field">
                        <input className="form-control" type="text" name="zipcode" placeholder="Zip code.."/>
                      </div>
                      <div className="form-field">
                        <input className="form-control" type="text" name="country" placeholder="Zip code.."/>
                      </div>
                  </div>

                  <hr></hr>
                  <input id="form-button" className="btn btn-success btn-block" type="submit" value="Continue"/>
              </form>
            </div>

            <br></br>
            <div className="box-element hidden" id="payment-info">
              <small>Paypal Options</small>
              <div id="paypal-button-container"></div>
              {/* <button id="make-payment">Make payment</button> */}
            </div>
            
          </div>

          <div className="col-lg-6">
            <div className="box-element">
              <Link  className="btn btn-outline-dark" to="/cart/">&#x2190; Back to Cart</Link>
              <hr></hr>
              <h3>Order Summary</h3>
              <hr></hr>
              
              <div className="cart-row">
                <div style={{flex:2}}><img className="row-image" alt="product" src={product}/></div>
                <div style={{flex:2}}><p>Product</p></div>
                <div style={{flex:1}}><p>$Total</p></div>
                <div style={{flex:1}}><p>xQtity</p></div>
              </div>
              
              <h5>Items:   Items</h5>
              <h5>Total:   $Total</h5>
            </div>
          </div>
        </div>
      </>
    )};
  
  export default Checkout;
  