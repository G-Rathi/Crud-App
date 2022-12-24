import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Protected from './components/Protected';
import About from './pages/About';
import Create from './pages/Create';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Read from './pages/Read';
import Register from './pages/Register';
import Update from './pages/Update';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<PageNotFound />} />
        <Route path='/create' element={<Protected Component={Create} />} />
        <Route path='/read' element={<Protected Component={Read} />} />
        <Route path='/about' element={<About />} />
        <Route path='/update/:id' element={<Protected Component={Update} />} />
        <Route path='/add_user' element={<Protected Component={Create} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;