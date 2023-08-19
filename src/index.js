import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav,Login_Page } from './App';
ReactDOM.render(<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='/Login' element={<Login_Page/>}/>

    </Routes>
  </BrowserRouter>
</>,document.getElementById("root"));
