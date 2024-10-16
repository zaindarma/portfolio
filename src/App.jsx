import './App.css'
import DetailPortfolio from './pages/DetailPortfolio'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Experience from './pages/Experience'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/:id' element={<DetailPortfolio />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App