import { getUrlInstanse } from "./baseApi"

export const loginUserAPI=(form,callback)=>{

    getUrlInstanse().post('/login',form)
    .then(res=>{
        callback(true,res.data)
    }).catch(err=>{
        console.log(err)
        callback(false , err.response.data)

       
    })
}