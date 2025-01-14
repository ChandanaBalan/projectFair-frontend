//reg request

import { commonApi } from "./commonApi"
import { serverurl } from "./serviceUrl"

export const requestApi = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/register`, reqBody,"")
}

//login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/login`, reqBody,"")
}

//add-project
export const addProjectApi = async(reqBody, reqHeader) =>{
    return await commonApi('POST', `${serverurl}/add-project`, reqBody, reqHeader)
}

//get home porjects

export const homeProjectApi = async()=>{
    return await commonApi('GET', `${serverurl}/home-project`)
}

//get all projects
// query parameter - baseurl?key = value

export const allProjectApi = async(searchKey, reqHeader)=>{
    return await commonApi('GET', `${serverurl}/all-project?search=${searchKey}`, "", reqHeader)
}

//get user projects

export const userProjectApi = async(reqHeader)=>{
    return await commonApi('GET', `${serverurl}/user-project`,"", reqHeader)
}

//api to remove user project

export const removeProjectApi = async(id,reqHeader)=>{
    return await commonApi('DELETE', `${serverurl}/remove-userProject/${id}`,{},reqHeader)
}

