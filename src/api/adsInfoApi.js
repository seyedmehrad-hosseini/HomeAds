import { getUrlInstanse } from "./baseApi"

export const adsInfoAPI=(id,callback)=>{

    getUrlInstanse().get(`/advertise?id=${id}`)
    .then(res=>{
        callback(true,res.data)
    }).catch(err=>{
        console.log(err)
        callback(false , err.response.data)

       
    })
}