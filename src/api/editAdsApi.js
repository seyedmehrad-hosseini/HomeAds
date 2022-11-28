import { getUrlInstanse } from "./baseApi"

export const editAdsAPI=(id,form,callback)=>{
    console.log('id',id)
    console.log('form',form)

    getUrlInstanse().put(`/advertise/${id}`,form)
    .then(res=>{
        callback(true,res.data)
    }).catch(err=>{
        console.log(err)
        callback(false , err.response.data)

       
    })
}