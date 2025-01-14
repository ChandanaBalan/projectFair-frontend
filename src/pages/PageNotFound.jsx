
import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center mb-5">
                <img className='w-50' src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
                <h1>Look like you're lost</h1>
                <p className='mt-3'>The page you are looking is unavailable</p>
                <Link to={'/'}><button className='text-white p-2 bg-success border rounded mt-2'>Go Home</button></Link>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
    </>
  )
}

export default PageNotFound