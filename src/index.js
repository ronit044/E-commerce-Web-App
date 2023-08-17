import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './App';
ReactDOM.render(<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav/>}/>
    </Routes>
  </BrowserRouter>
</>,document.getElementById("root"));
