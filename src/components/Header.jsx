import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <>
         <Navbar className="bg-success d-flex align-items-center" fixed='top'>
         <Container className=' '>
         <Link to={'/'} style={{textDecoration:"none"}}>
          
            <Navbar.Brand href="#home">
              <h1 className='text-light'> <FontAwesomeIcon icon={faStackOverflow} size='xl' className='me-3'/><Link to={'/'} className='text-light' style={{textDecoration:"none"}}>Project Fair</Link></h1>
            </Navbar.Brand>
          
         </Link>
        <button className='p-2 btn btn-warning'> <FontAwesomeIcon icon={faPowerOff} /> Logout</button>
        </Container>
        </Navbar>
    </>
  )
}

export default Header