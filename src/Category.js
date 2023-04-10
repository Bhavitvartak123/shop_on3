import React from 'react';


import { useDispatch, useSelector } from 'react-redux';


//STEP 24
const Category = () => {
  const category = useSelector((state) => state.products.listProducts)
  return (
    <div className='row'>
      {
        category && category.map((item, index) => (
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

export default Category;