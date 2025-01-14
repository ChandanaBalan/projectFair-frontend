import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
    return (
        <>
            <div className='bg-success container-fluid ' >
                <div className="row p-md-5 p-md-2 p-0 ">
                    <div className="col-md-4 p-5">
                        <h2 className='text-white'><FontAwesomeIcon icon={faStackOverflow} className='me-3' />Project Fair</h2>
                        <p className='mt-4 ' style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolorum sequi distinctio quisquam et, quaerat sint architecto quis ducimus quo aut laborum magni sed ea id aspernatur nisi debitis illum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, enim repellat nostrum at ullam magnam blanditiis reiciendis id dolorem culpa unde placeat harum repudiandae voluptatum quidem praesentium sapiente molestiae illo!</p>
                    </div>
                    
                    <div className="col-md-2 p-5">
                        <h2 className='text-white'>Guides</h2>
                        <p className='mt-md-4 mt-0'>Home</p>
                        <p>Project</p>
                        <p>Dashboard</p>
                    </div>
                    
                    <div className="col-md-2 p-5">
                        <h2 className='text-white'>Links</h2>
                        <p className='mt-md-4 mt-0'>React</p>
                        <p>React bootstrap</p>
                        <p>Bootswatch</p>
                    </div>
                    <div className="col-md-4 p-5 ">
                        <h2 className='text-white'>Contact</h2>
                        <div className='mt-md-4 mt-0 d-flex w-'>
                            <input type="text" placeholder='Email Id' className='w-100 p-2 rounded border' />
                            <button className='ms-3 p-2 rounded btn btn-warning'>Subscribe</button>
                        </div>
                        <div className='d-flex justify-content-between mt-4 text-white'>
                        <FontAwesomeIcon icon={faInstagram} size="2xl" />
                        <FontAwesomeIcon icon={faXTwitter} size="2xl"/>
                        <FontAwesomeIcon icon={faFacebook} size="2xl" />
                        <FontAwesomeIcon icon={faLinkedin} size="2xl"/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer