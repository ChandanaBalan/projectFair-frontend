import React from 'react'
import Card from 'react-bootstrap/Card';
import weather from '../assets/weather.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { serverurl } from '../service/serviceUrl';


function ProductCard({project}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '100%' }} className='shadow border-0 mt-5 mt-md-0'>
                <Card.Img style={{height:"200px"}} variant="top" src={`${serverurl}/upload/${project.projectImage}`} className='w-100' onClick={handleShow} />
                <Card.Body>
                    <Card.Title className='text-center'  >{project?.title}</Card.Title>
                </Card.Body>
            </Card>


            <Modal show={show} onHide={handleClose} centered size='lg' >
                <Modal.Header closeButton>
                    <Modal.Title>{project?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-5'>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`${serverurl}/upload/${project.projectImage}`} alt="" className='w-100' />
                        </div>
                        <div className="col-md-6">
                            <h3 className='mt-md-0 mt-4'>Description</h3>
                            <p style={{textAlign:"justify"}} >{project?.overview}</p>
                            <h4>Technologies</h4>
                            <p>{project?.language}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Link to={project?.github} target='blank'><FontAwesomeIcon icon={faGithub} size="2xl" className='me-3'/></Link>
                <Link to={project?.website} target='blank'><FontAwesomeIcon icon={faGlobe} size="2xl"/></Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductCard