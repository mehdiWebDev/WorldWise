import React from 'react';
import Product from './pages/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';

export default function App() {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='product' element={<Product/>} />
          <Route path='pricing' element={<Pricing/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
