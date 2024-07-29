import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { BrowseMovies } from './pages/BrowseMovies'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import { ViewDetails } from './pages/ViewDetails'
import ErrorBoundary from './components/ErrorBoundary'
import { ComingSoon } from './components/ComingSoon'

function App() {
  return (
    <div className='bg-bkgprim text-textprim h-full'>
      <Navbar />
      <ErrorBoundary >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/browse-movies' element={<BrowseMovies />} />
          <Route path="/movies/:id" element={<ViewDetails />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App;

