import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { allProjectApi } from '../service/allApi'


function Projects() {
  const [token, setToken] = useState("")
  const [allProject, setAllProject] = useState([])

  const [searchKey, setSearchKey] = useState([])

  const getAllProject = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }

      const result = await allProjectApi(searchKey, reqHeader)
      // console.log(result.data);
      setAllProject(result.data)
      // console.log(allProject);
      
      
    }
  }

  console.log(token);
  console.log(allProject);
  console.log(searchKey);
  
  
  useEffect(()=>{
    getAllProject()

  },[searchKey])

  useEffect(()=>{
    // getAllProject()
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem('token'))
    }
  },[])

  return (

    
    <>
    <Header/>
    <div>
        <h3 className='text-center my-4'>All Projects</h3>

        {/* not logged in */}

        {!token?<div className="mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 d-flex justify-content-center flex-column align-items-center container-fluid">
                <img src="https://arkca.com/assets/img/login.gif" alt="no image"  className=' w-md-100 w-60'/>
                <div className="text-center mb-5">Please <Link to={'/login'}>Login</Link> to see more Projects</div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        
:


        

        <div>
          <div className="my-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 d-flex mt-5">
                  <input onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder='Technologies' className='form-control shadow ' />
                  <FontAwesomeIcon style={{color:"black", marginTop:"10px", marginLeft:"-30px"}} icon={faMagnifyingGlass} />
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
  
          <div className="container my-5">
            <div className="row">
              {allProject?.map((item)=>(
                <div className="col-md-3"><ProductCard project={item} /></div>

              ))
                }
            </div>
          </div>
        </div>
        
        }

        
    </div>
    </>
  )
}

export default Projects