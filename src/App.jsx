import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar'
import Swap from './components/Swap'
import TokenFetch from './components/TokenFetch';
import Footer from './components/Footer';



function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<TokenFetch />} />
          <Route path='/home' element={<TokenFetch />} />
          <Route path='/swap' element={<Swap />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
