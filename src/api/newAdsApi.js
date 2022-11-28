import { getUrlInstanse } from "./baseApi"

export const newAdsAPI=(form,callback)=>{

    getUrlInstanse().post('/advertise',form)
    .then(res=>{
        callback(true,res.data)
    }).catch(err=>{
        console.log(err)
        callback(false , err.response.data)

       
    })
}