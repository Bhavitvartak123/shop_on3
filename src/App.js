import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  //Step 1 Touter Setup

import Category from './Category';
import Product from './Product';
import NotFound from './NotFound';
import Home from './Home';

import Footer from './template/Footer';
import Header from './template/Header';
import Menubar from './template/Menubar';

function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter>

          <Header />
          <Menubar />

          <div className='row content-area'>
            <div className='col'>
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/category' element={<Category />} />
                <Route path='/product' element={<Product />} />
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </div>
          </div>

          <Footer />

        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
