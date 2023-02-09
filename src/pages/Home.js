import React , {useContext} from 'react'
import { Outlet, Link } from "react-router-dom";
import Banner from '../components/Banner';
import product from '../assets/briefcase.jpg'
import { MyContext } from './context';



export function Home() {
  
  const {setCart} = useContext(MyContext);

  const handleClick = event => {
        var action = event.target.getAttribute('data-action');
        console.log(action)
        if (action==='add'){setCart((c) => c + 1)}
        else if(action === 'remove'){setCart((c) => c - 1)}
      };
  /* states */

  return (
    <> 
    <Banner />
    <div className="app-header">
    
            <div className="w3-container">
              <br></br>
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="product">
                                <img className="thumbnail" alt="productimage" src={product} />
                                <p style={{wordWrap: 'breakWord', textAlign: 'center'}}><strong>Product Name</strong></p>
                                <p style={{textAlign: 'center'}}>$120,000</p>
                                
                                <Link onClick={handleClick} style={{paddingLeft:'5px'}} data-product="" data-action="add" className="btn-outline-secondary add-btn update-cart">Add to cart &#128722;</Link>
                                <Link style={{display: 'inlineBlock', float: 'right', paddingRight:'5px'}} className="btn-outline-success" to="">Product</Link>
                        </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="product">
                                <img className="thumbnail" alt="productimage" src={product} />
                                <p style={{wordWrap: 'breakWord', textAlign: 'center'}}><strong>Product Name</strong></p>
                                <p style={{textAlign: 'center'}}>$120,000</p>
                                
                                <Link onClick={handleClick} style={{paddingLeft:'5px'}} data-product="" data-action="add" className="btn-outline-secondary add-btn update-cart">Add to cart &#128722;</Link>
                                <Link style={{display: 'inlineBlock', float: 'right', paddingRight:'5px'}} className="btn-outline-success" to="">Product</Link>
                        </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="product">
                                <img className="thumbnail" alt="productimage" src={product} />
                                <p style={{wordWrap: 'breakWord', textAlign: 'center'}}><strong>Product Name</strong></p>
                                <p style={{textAlign: 'center'}}>$120,000</p>
                                
                                <Link onClick={handleClick} style={{paddingLeft:'5px'}} data-product="" data-action="add" className="btn-outline-secondary add-btn update-cart">Add to cart &#128722;</Link>
                                <Link style={{display: 'inlineBlock', float: 'right', paddingRight:'5px'}} className="btn-outline-success" to="">Product</Link>
                        </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="product">
                                <img className="thumbnail" alt="productimage" src={product} />
                                <p style={{wordWrap: 'breakWord', textAlign: 'center'}}><strong>Product Name</strong></p>
                                <p style={{textAlign: 'center'}}>$120,000</p>
                                
                                <Link onClick={handleClick} style={{paddingLeft:'5px'}} data-product="" data-action="add" className="btn-outline-secondary add-btn update-cart">Add to cart &#128722;</Link>
                                <Link style={{display: 'inlineBlock', float: 'right', paddingRight:'5px'}} className="btn-outline-success" to="">Product</Link>
                        </div>
                </div>
              </div>
            </div>
    </div>
    <Outlet />
    </>
  )
}
export default Home