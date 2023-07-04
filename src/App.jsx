import React, { useEffect, useState } from 'react';
import Product from './pages/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
export default function App() {

  const [cities,setCities] = useState({});
  const [isLoading,setIsLoading] = useState(false);

  const BASE_URL= 'http://localhost:9000'

  useEffect(()=>{
    async function fetchCities(){
     try{
      setIsLoading(true);
      const result = await fetch(`${BASE_URL}/cities`);
      const data  = await result.json();
      setCities(data);
     } catch {
      alert("There was an error loading data ... ");
     } finally {
      setIsLoading(false);
     }

    }
    fetchCities();
     
  },[])


  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path='product' element={<Product/>} />
          <Route path='pricing' element={<Pricing/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/app' element={<AppLayout/>} >
              <Route  index element={<CityList/>} />
              <Route path='cities' element={<CityList/>} />
              <Route path='countries' element={<p> List of countries </p>} />
              <Route path='form' element={<p> Form </p>} />
          </Route>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
