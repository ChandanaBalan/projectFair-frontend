import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
import { useContext } from 'react'
import { loginResponseContext } from './context/ContextShare'




function App() {
  const {loginResponse} =useContext(loginResponseContext)
  

  return (
    <>
      

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register={true}/>} />
        <Route path='/Dashboard' element={loginResponse?<Dashboard/>:<PageNotFound/>} />
        <Route path='/Projects' element={loginResponse?<Projects/>:<PageNotFound/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
