import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Swap from './components/Swap'
import TokenFetch from './components/TokenFetch';
import Footer from './components/Footer';
import Navigation from './components/Navigation.jsx';



function App() {
  return (
    <>

      <BrowserRouter>
        {/* <Navbar /> */}
        <Navigation/>
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
