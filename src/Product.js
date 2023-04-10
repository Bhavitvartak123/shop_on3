import React from 'react';
//STEP 22
import { useDispatch, useSelector } from 'react-redux';


//STEP 23
const Product = () => {
  const products = useSelector((state) => state.products.listProducts)
  return (
    <div className='row'>
      {
        products && products.map((item, index) => (
          <div className='col-3'>
            <div className="card">
              <img src={item.image} className="card-img-top" alt="..." />     {/*copy to "Home.js"*/}
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <h5 className="card-title">{item.price}</h5>
                <a href="#" class="btn btn-primary button-buy-now">Buy Now</a>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Product;

//"((state) => state.products.listProducts)" this indicate file location. Imp
//Abhi sara data produt me aa gya.
