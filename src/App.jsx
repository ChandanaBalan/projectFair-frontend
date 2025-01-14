import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'




function App() {
  

  return (
    <>
      

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register={true}/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
