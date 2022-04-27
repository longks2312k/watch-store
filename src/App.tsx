import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import './App.css';
import Bill from './pages/Bill';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bill' element={<Bill/>}/>
      </Routes>
    </div>
  );
}

export default App;
