import React from 'react';

//Components
import Navbar from './components/navbar/Navbar';

import Products from './components/products/Products';
import Cart from './components/cart/Cart';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (

    <BrowserRouter>

      <div className='App'>

        <Navbar />

        <Routes>

          <Route path='/' element={<Products />} />

          <Route path='/cart' element={<Cart />} />

        </Routes>

      </div>

    </BrowserRouter>

  )

}

export default App;