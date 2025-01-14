import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Profile() {
    return (
        <>
            <button className='w-100 shadow border-0'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4 className='text-success'>Profile</h4></Accordion.Header>
                        <Accordion.Body>
                            <label htmlFor="profileimage" className='d-flex justify-content-center align-items-center'>
                                <input type="text" id='profileimage' className='d-none' />
                                <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="" className='w-75' />
                            </label>
                            <div>
                                <div className='mt-3'>
                                    <input type="text" placeholder='Github' className='form-control' />
                                </div>
                                <div className='mt-3'>
                                    <input type="text" placeholder='Linkedin' className='form-control' />
                                </div>
                                <div className='my-3 text-center'>
                                    <button className='btn btn-success w-75 p-2'>
                                        Update Profile
                                    </button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </button>

        </>
    )
}

export default Profile