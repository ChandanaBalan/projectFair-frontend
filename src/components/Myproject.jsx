import React, { useContext, useEffect, useState } from 'react'
import Addproject from './Addproject'
import Edit from './Edit'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { removeProjectApi, userProjectApi } from '../service/allApi'
import { Link } from 'react-router-dom'
import { addResponseContext, editProjectResponse } from '../context/ContextShare'



function Myproject() {
  const [userProject, setUserProject] = useState([])
  const [deleteResponse, setDeleteResponse] = useState([])

  const {addResponse} = useContext(addResponseContext)
  const {editResponse} = useContext(editProjectResponse)


  const getUserProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await userProjectApi(reqHeader)
      console.log(result.data);
      setUserProject(result.data)
      // console.log(allProject);


    }

  }

  console.log(userProject);

  const handleDelete = async(id)=>{
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await removeProjectApi(id, reqHeader)
      console.log(result);
      if(result.status == 200){
        setDeleteResponse(result)
        alert('Project deleted successfully')
        

      }
      else{
        alert('Something went wrong')
      }
      
    }
    
  }

  useEffect(() => {
    getUserProject()
  }, [addResponse, deleteResponse,editResponse])

  return (
    <>
      <div className="p-5 shadow">
        <div className="d-flex justify-content-between ">
          <h3>My Projects</h3>
          <Addproject />
        </div>
        {userProject?.length > 0 ?
          userProject?.map((item) => (
            <div className="p-3 bg-light mt-3 rounded d-flex align-items-center justify-content-between">
              <h5>{item?.title}</h5>
              <div className='d-flex'>
                <Edit projects={item} />
                <Link to={item?.website} target='_blank'><FontAwesomeIcon icon={faGlobe} className='me-4 text-warning' /></Link>
                <Link to={item?.github} target='_blank'><FontAwesomeIcon icon={faGithub} className='me-4 text-success' /></Link>
               <Link> <FontAwesomeIcon onClick={()=>handleDelete(item?._id)} icon={faTrash} className='me-4 text-danger' /></Link>
              </div>

            </div>
          ))

          :
          <h4 className='text-center text-warning mt-5'>No projects added</h4>}
      </div>
    </>
  )
}

export default Myproject