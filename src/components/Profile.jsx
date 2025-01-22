import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserProfileApi } from '../service/allApi';
import { serverurl } from '../service/serviceUrl';



function Profile() {
    const [updateStatus, setUpdateStatus] = useState({})
    const [preview, setPreview] = useState("")
    const [existingImg, setExistingImg] = useState("")
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
        profile: "",
        linkedin: "",
        github: ""

    })
    console.log(userDetails);

    const handleFile = (e) => {
        setUserDetails({ ...userDetails, profile: e.target.files[0] })
    }

    useEffect(() => {
        if (userDetails.profile) {
            setPreview(URL.createObjectURL(userDetails.profile))
        }
    }, [userDetails.profile])

    console.log(preview);

    

    const handleUpdate = async() => {
        const { username, email, password, profile, github, linkedin } = userDetails
        if (!github || !linkedin) {
            toast.info('Enter github and linkedin')
        } else {

            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)
            reqBody.append("github", github)
            reqBody.append("linkedin", linkedin)
            preview ?
                reqBody.append("profile", profile) :
                reqBody.append("existingImg", existingImg)
            const token = sessionStorage.getItem("token")
            if(preview){
                const reqHeader = {
                          "Content-Type" : "multipart/form-data",
                          "Authorization" : `Bearer ${token}`
                        }
                        const result = await updateUserProfileApi(reqBody, reqHeader)
                        console.log(result);
                        if(result.status==200){
                            setUpdateStatus(result)
                            toast.success("Profile updated Successfully")
                            sessionStorage.setItem("existingUsers", JSON.stringify(result.data))
                            
                        }else{
                            toast.error("Something went wrong")
                        }
            }else{
                const reqHeader = {
                          "Content-Type" : "application/json",
                          "Authorization" : `Bearer ${token}`
                        }
                        const result = await updateUserProfileApi(reqBody, reqHeader)
                        console.log(result);
                        if(result.status==200){
                            setUpdateStatus(result)
                            toast.success("Profile updated Successfully")
                            sessionStorage.setItem("existingUsers", JSON.stringify(result.data))
                            
                        }else{
                            toast.error("Something went wrong")
                        }
            }


        }
    }

useEffect(() => {
        if (sessionStorage.getItem("existingUsers")) {
            const user = JSON.parse(sessionStorage.getItem("existingUsers"))
            console.log(user);
            setUserDetails({ ...userDetails, username: user.username, email: user.email, password: user.password, github: user.github, linkedin: user.linkedin })
            setExistingImg(user.profile)

        }
    }, [updateStatus])

    return (
        <>
            <button className='w-100 shadow border-0'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4 className='text-success'>Profile</h4></Accordion.Header>
                        <Accordion.Body>
                            <label htmlFor="profileimage" className='d-flex justify-content-center align-items-center'>
                                <input onChange={(e) => handleFile(e)} type="file" id='profileimage' className='d-none' />


                                {existingImg == "" ?
                                    <img src={preview ? preview : "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"} alt="" style={{ width: "200px", height: "200px", borderRadius: "50%", marginBottom: "10px" }} />
                                    :
                                    <img src={preview ? preview : `${serverurl}/upload/${existingImg}`} alt="profile" style={{ width: "200px", height: "200px", borderRadius: "50%", marginBottom: "10px" }} />}


                            </label>
                            <div>
                                <div className='mt-3'>
                                    <input onChange={(e) => setUserDetails({ ...userDetails, github: e.target.value })} value={userDetails?.github} type="text" placeholder='Github' className='form-control' />
                                </div>
                                <div className='mt-3'>
                                    <input onChange={(e) => setUserDetails({ ...userDetails, linkedin: e.target.value })} value={userDetails?.linkedin} type="text" placeholder='Linkedin' className='form-control' />
                                </div>
                                <div className='my-3 text-center'>
                                    <button onClick={handleUpdate} className='btn btn-success w-75 p-2'>
                                        Update Profile
                                    </button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </button>

            <ToastContainer position='top-center' autoClose={2000} theme="colored" />

        </>
    )
}

export default Profile