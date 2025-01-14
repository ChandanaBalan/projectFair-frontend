
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import HomeImage from '../assets/HomeImage.png'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { homeProjectApi } from '../service/allApi'


function Home() {

    const [isLogin, setIsLogin] = useState(false)
    const [homeProject, setHomeProject] = useState([])

    const getHomeProject = async () => {
        const result = await homeProjectApi()
        setHomeProject(result.data)
    }

    console.log(homeProject);


    useEffect(() => {
        getHomeProject()
        if (sessionStorage.getItem("token")) {
            setIsLogin(true)
        }
        else {
            setIsLogin(false)
        }
    }, [])
    return (
        <>

            <div className='container-fluid bg-success pt-md-5 pt-0' style={{ height: "100vh" }}>
                <div className="row pt-5">
                    <div className="col-md-6 text-light p-5 d-flex justify-content-center align-items-center flex-column">
                        <h1 style={{ fontSize: "100px" }} className='pt-5'> <FontAwesomeIcon icon={faStackOverflow} className='me-3' /> Project Fair</h1>
                        <h4>One stop destination for all software development Projects</h4>
                        <div>
                            {!isLogin ?
                                <Link to={'/login'}><button className='btn'>Get Started →</button></Link>
                                :
                                <Link to={'/Dashboard'}><button className='btn'>Manage Projects →</button></Link>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={HomeImage} alt="" className='w-100 pt-md-5 pt-0' />
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center mt-5'>Explore Our Projects</h1>
                <div className='container'>
                    
                        <div className="row mt-5">
                        {homeProject?.map((item) => (
                            <div className="col-md-4"><ProductCard  project= {item}/></div>
                        ))
                    }
                        </div>

                    

                </div>
                <Link to={'/projects'} className='text-warning'><p className='text-warning text-center my-5'>See more projects...</p></Link>
            </div>
        </>
    )
}

export default Home