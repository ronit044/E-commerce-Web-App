import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav,Login_Page,Contact,SignUP } from './App';
ReactDOM.render(<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='/Login' element={<Login_Page/>}/>
      <Route path='/Cont' element={<Contact/>}/>
      <Route path='/signup' element={<SignUP/>}/>
    </Routes>
  </BrowserRouter>
</>,document.getElementById("root"));
