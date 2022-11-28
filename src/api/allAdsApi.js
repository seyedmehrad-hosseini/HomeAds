import { getUrlInstanse } from "./baseApi"

export const allAdvertiseAPI=(pageNumber,callback)=>{

    getUrlInstanse().get(`/advertise?_page=${pageNumber}&_limit=6`)
    .then(res=>{
        callback(true,res.data)
    }).catch(err=>{
        callback(false , err.response.data)

       
    })
}