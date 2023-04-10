import React, { useEffect, useState } from 'react';
//STEP 15
import { useDispatch, useSelector } from 'react-redux';
//STEP 18
import { setProducts } from './redux/actions/productActions';





const Home = () => {
  // const [products, setProducts] = useState([]); //create "combined.js" its not used.

  //STEP 16
  const dispatch = useDispatch();
  //STEP 18
  const products = useSelector((state) => state.products.listProducts);


  const callApi = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    //setProducts(data);         //create "combined.js" its not used

    //STEP 17
    dispatch(setProducts(data));
    //SETPRODUCT                 /*Continued Home.js STEP 5 temorary step*/
  }
  useEffect(() => {
    callApi();
  }, [])

  useEffect(() => {
    //console.log('Products List -', products); // temp off
    //STEP 19
    console.log('Products List -', products);


  })
  return (
    <div className='row'>
      {
        products && products.map((item, index) => (
          <div className='col-3'>
            <div className="card">
              <img src={item.image} className="card-img-top" alt="..." />
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
  )
}

export default Home;



//Step 15 Idher action bhejne ka kam "useDispatch" Krega
//Final store lane ka kam "useSelector" krega.
//temp close useEffect console part.
//Step 17 dispatch ke andar call "setProduct"
//Step "setProduct" ke andar pass "data"
//Bhejne ka kam khtam
//return lene kam shuru.
//Step 18 me hamara store date ka location btaya gya hai "state.products.listProducts"
//STEP 19 found error.