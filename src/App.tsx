import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { Layout } from './components/navigator/Layout';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element= { <Layout/> }>

    </Route>
  </Routes>
  </BrowserRouter>

}
export default App;


