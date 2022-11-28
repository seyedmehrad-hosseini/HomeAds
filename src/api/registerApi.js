import { getUrlInstanse } from "./baseApi"

export const RejisterUserAPI=(form,callback)=>{

    getUrlInstanse().post('/auth/register',form)
    .then(res=>{
        callback(true,res.data)
    }).catch(err=>{
        callback(false , err.response.data)

       
    })
}