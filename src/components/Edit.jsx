import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Edit() {

      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
    <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} className='text-info me-4'/>

    <Modal centered show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="projectfile">
                            <input type="file" id='projectfile' className='d-none' />
                            <img src="https://icons.iconarchive.com/icons/graphicloads/long-shadow-documents/256/document-add-icon.png" alt="" className='w-100' />
                        </label>
                    </div>
                    <div className="col-md-6">
                        <div className='mt-3'>
                            <input type="text" placeholder='Title' className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <input type="text" placeholder='Language' className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <input type="text" placeholder='Github' className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <input type="text" placeholder='Website' className='form-control' />
                        </div>
                        <div className='mt-3'>
                            <textarea rows={5} placeholder='Overview' className='form-control' ></textarea>
                        </div>

                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit