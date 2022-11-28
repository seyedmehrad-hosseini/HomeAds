import { getUrlInstanse } from "./baseApi"

export const deleteAdaApi=(id,callback)=>{

    getUrlInstanse().delete(`/advertise/${id}`)
    .then(res=>{
        callback(true,res.data)
    }).catch(err=>{
        console.log(err)
        callback(false , err.response.data)

       
    })
}